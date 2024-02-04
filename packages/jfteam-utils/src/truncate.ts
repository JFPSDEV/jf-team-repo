export const truncate = (line: string, maxChar: number): string => {
  if (line.length <= maxChar) {
    return line;
  } else {
    return line.slice(0, maxChar) + '...';
  }
};
