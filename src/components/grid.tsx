type GridProps<T> = { Of: React.ComponentType<T>; items: T[] };

const Grid = <T,>({ Of, items }: GridProps<T>) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {items.map((item, i) => (
      <Of key={i} {...item} />
    ))}
  </div>
);

export default Grid;
