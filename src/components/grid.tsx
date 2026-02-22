interface Item {
  id: string;
}

interface GridProps<TItem extends Item> {
  Of: React.ComponentType<Omit<TItem, "id">>;
  items: TItem[];
}

export function Grid<TItem extends Item>({ Of, items }: GridProps<TItem>): React.ReactNode {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {items.map((item) => (
        // eslint-disable-next-line react/no-array-index-key -- Unique Items
        <Of key={item.id} {...item} />
      ))}
    </div>
  );
}
