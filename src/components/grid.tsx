interface GridProps<TItem> {
  Of: React.ComponentType<TItem>;
  items: TItem[];
}

function Grid<TItem>({ Of, items }: GridProps<TItem>): React.ReactNode {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {items.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key -- Unique Items
        <Of key={i} {...item} />
      ))}
    </div>
  );
}

export { Grid };
