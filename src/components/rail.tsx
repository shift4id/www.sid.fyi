import { cn } from "@/utils/cn";
import styles from "./rail.module.css";

type RailProps = React.ComponentProps<"div">;

/** A full-bleed horizontal scroller; children are laid out in a single row. */
export function Rail({ className, ...props }: RailProps): React.ReactNode {
  return <div className={cn(styles.rail, className)} {...props} />;
}
