const accessToken = process.env.GITHUB_ACCESS_TOKEN;
const userName = process.env.GITHUB_USER_NAME;

type ContributionLevel = "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";

const fetcher = async <T>(url: string, options: Parameters<typeof fetch>[1]): Promise<T> =>
  (await fetch(url, {
    ...options,
    headers: { Authorization: `Bearer ${accessToken}` },
  }).then((r) => r.json())) as T;

interface Contribution {
  level: 0 | 1 | 2 | 3 | 4;
  date: string;
}

type Contributions = Contribution[];

const LEVEL_MAP = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
} satisfies Record<ContributionLevel, Contribution["level"]>;

const contributionsQuery = `
query ($userName: String!) {
  user(login: $userName) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
          }
        }
      }
    }
  }
}
`;

const getContributions = async (): Promise<Contributions | undefined> => {
  interface ContributionsResponse {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: {
              contributionDays: {
                contributionCount: number;
                contributionLevel: ContributionLevel;
                date: string;
              }[];
            }[];
          };
        };
      };
    };
  }

  const data = await fetcher<ContributionsResponse>("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: contributionsQuery,
      variables: { userName },
    }),
  })
    .then((res) => res.data.user.contributionsCollection.contributionCalendar.weeks)
    .catch(() => undefined);

  return data?.flatMap((week) =>
    week.contributionDays.map(({ contributionLevel, date }) => ({
      level: LEVEL_MAP[contributionLevel],
      date,
    })),
  );

  // return data?.map((week) =>
  //   week.contributionDays.map(({ contributionLevel, date }) => ({
  //     level: LEVEL_MAP[contributionLevel],
  //     date,
  //   })),
  // );
};

export type { Contributions };
export { getContributions };
