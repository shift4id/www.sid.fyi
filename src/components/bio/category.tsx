import Section from "../section";

type CategoryProps<T> = { title: string; items: T[]; Component: React.FC<T> };

const Category = <T extends { title: string }>({ title, items, Component }: CategoryProps<T>) => (
  <Section title={title}>
    <ul className="mt-4 space-y-1">
      {items.map((item) => (
        <li key={item.title} className="text-sm">
          <Component key={item.title} {...item} />
        </li>
      ))}
    </ul>
  </Section>
);

export default Category;
