import { usePriceFlash } from "@/hooks/usePriceFlash";
import clsx from "clsx";

export function Price({ value }: { value: number }) {
  const flash = usePriceFlash(value);

  return (
    <span
      className={clsx(
        flash === "up" && "text-green-400",
        flash === "down" && "text-red-400",
        "transition-colors"
      )}
    >
      ${value.toFixed(4)}
    </span>
  );
}
