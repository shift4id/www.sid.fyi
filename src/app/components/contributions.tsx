import { Section } from "@/components";
import { getContributions } from "@/lib/github";
import { cn } from "@/utils";

const COLOR_MAP = ["bg-subtle", "bg-accent/25", "bg-accent/50", "bg-accent/75", "bg-accent/100"] as const;

const COLUMN_SPAN = [
  "hidden",
  "row-span-1",
  "row-span-2",
  "row-span-3",
  "row-span-4",
  "row-span-5",
  "row-span-6",
] as const;

async function Contributions(): Promise<React.JSX.Element> {
  const contribution = await getContributions();

  if (!contribution) return <div />;

  const startFrom = (new Date(contribution[0].date).getDay() + 1) % 7;

  return (
    <Section title="Contribution Calendar">
      <div className="relative flex overflow-x-auto">
        <div className="sticky left-0 grid min-w-8 grid-flow-col grid-rows-7 gap-1 bg-background px-2 text-muted">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="flex h-3 items-center justify-end text-xs leading-none">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grow grid-flow-col grid-rows-7 gap-1">
          <div className={COLUMN_SPAN[startFrom]} />
          {contribution.map((day) => (
            <div
              key={day.date}
              className={cn("flex size-3 items-center justify-center rounded-sm", COLOR_MAP[day.level])}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export { Contributions };
