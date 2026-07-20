// Tiny className joiner — filters out falsy values and joins with a space.
// Keeps JSX readable without pulling in a dependency.
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}
