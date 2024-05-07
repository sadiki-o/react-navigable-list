export const range = (start: number, end: number, step = 1) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, index) => start + index * step
  );
};
