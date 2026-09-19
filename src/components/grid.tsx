import { cn } from "@/utils/cn";

interface Item {
  id: string;
}

interface GridProps<TItem extends Item> {
  Of: React.ComponentType<Omit<TItem, "id">>;
  items: TItem[];
  className?: string;
}

export function Grid<TItem extends Item>({
  Of,
  items,
  className = "grid-cols-1 gap-8 sm:grid-cols-2",
}: GridProps<TItem>): React.ReactNode {
  return (
    <div className={cn("grid", className)}>
      {items.map((item) => (
        <Of key={item.id} {...item} />
      ))}
    </div>
  );
}
