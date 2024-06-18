import Section from "../section";

interface CategoryProps<T> {
  title: string;
  items: T[];
  Component: React.FC<T>;
}

const Category = <T extends { title: string }>({
  title,
  items,
  Component,
}: CategoryProps<T>): React.ReactNode => (
  <Section title={title}>
    <ul className="mt-4 flex flex-col items-end space-y-1">
      {items.map((item) => (
        <li key={item.title} className="text-right text-sm">
          <Component key={item.title} {...item} />
        </li>
      ))}
    </ul>
  </Section>
);

export default Category;
