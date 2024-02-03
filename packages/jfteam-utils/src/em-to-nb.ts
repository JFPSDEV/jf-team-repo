export const emToNb = (emValue: string) => {
  const match = emValue.match(/(\d+(\.\d+)?)em/);
  if (match && match[1]) {
    return parseFloat(match[1]);
  } else {
    return 0;
  }
};
