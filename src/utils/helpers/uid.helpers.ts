export const uid = (radix?: number) =>
  Math.random()
    .toString(radix || 16)
    .slice(2);
