import { Token } from "@/types/token";

export function sortTokens(
  data: Token[],
  key: keyof Token,
  dir: "asc" | "desc"
) {
  return [...data].sort((a, b) =>
    dir === "asc" ? a[key] - b[key] : b[key] - a[key]
  );
}
