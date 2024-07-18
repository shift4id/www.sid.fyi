import { Section } from "@/components";

interface CategoryProps<T> {
  title: string;
  items: T[];
  Component: React.FC<T>;
}

function Category<T extends { title: string }>({
  title,
  items,
  Component,
}: CategoryProps<T>): React.ReactNode {
  return (
    <Section title={title}>
      <ul className="mt-4 flex flex-col items-end gap-1">
        {items.map((item) => (
          <li key={item.title} className="text-right text-sm">
            <Component key={item.title} {...item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export { Category };
