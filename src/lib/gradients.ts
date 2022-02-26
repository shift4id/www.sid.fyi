type Color =
  | "amber"
  | "blue"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "green"
  | "indigo"
  | "lime"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "rose"
  | "sky"
  | "teal"
  | "violet"
  | "yellow";
type Gradient = `from-${Color}-500 via-${Color}-500 to-${Color}-500`;

type ColorPreferences = {
  [color in Color]: Color[];
};

const ugly: ColorPreferences = {
  amber: ["blue", "cyan", "emerald", "green", "indigo", "lime", "purple", "sky", "teal", "violet"],
  blue: ["amber", "lime", "orange", "red", "rose", "yellow"],
  cyan: ["amber", "orange", "pink", "red", "rose", "yellow"],
  emerald: ["amber", "fuchsia", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  fuchsia: ["emerald", "green", "lime", "teal"],
  green: ["amber", "fuchsia", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  indigo: ["amber", "lime", "orange", "red", "rose", "yellow"],
  lime: ["amber", "blue", "fuchsia", "indigo", "orange", "pink", "purple", "red", "rose", "violet", "yellow"],
  orange: ["blue", "cyan", "emerald", "green", "indigo", "sky", "lime", "purple", "teal", "violet"],
  pink: ["cyan", "emerald", "green", "lime", "teal"],
  purple: ["amber", "emerald", "green", "lime", "orange", "yellow"],
  red: ["blue", "cyan", "emerald", "green", "indigo", "lime", "sky", "teal"],
  rose: ["blue", "cyan", "emerald", "green", "indigo", "lime", "sky", "teal"],
  sky: ["amber", "orange", "red", "rose", "yellow"],
  teal: ["amber", "fuchsia", "orange", "pink", "red", "rose", "yellow"],
  violet: ["amber", "emerald", "green", "lime", "orange", "yellow"],
  yellow: ["blue", "cyan", "emerald", "green", "indigo", "lime", "purple", "sky", "teal", "violet"],
};

const similar: ColorPreferences = {
  amber: ["yellow"],
  blue: ["sky"],
  cyan: ["teal"],
  emerald: ["green"],
  fuchsia: ["pink", "violet"],
  green: ["emerald"],
  indigo: [],
  lime: [],
  orange: ["yellow"],
  pink: ["fuchsia", "red"],
  purple: ["violet"],
  red: ["pink", "rose"],
  rose: ["red"],
  sky: ["blue"],
  teal: ["cyan"],
  violet: ["fuchsia", "purple"],
  yellow: ["amber", "orange"],
};

const colors: Color[] = Object.keys(ugly) as Color[];

const gradients: Gradient[] = colors
  .flatMap((from) =>
    colors.flatMap((via) =>
      colors.flatMap(
        (to) =>
          from !== to &&
          from !== via &&
          via !== to &&
          !ugly[from].includes(via) &&
          !ugly[from].includes(to) &&
          !ugly[via].includes(to) &&
          !similar[from].includes(via) &&
          !similar[from].includes(to) &&
          !similar[via].includes(to) &&
          `from-${from}-500 via-${via}-500 to-${to}-500`
      )
    )
  )
  .filter((i) => i) as Gradient[];

export const getGradient = (): Gradient => gradients[Math.floor(Math.random() * gradients.length)];
export const getGradients = (): Gradient[] => gradients;
