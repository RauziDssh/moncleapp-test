export const viewer = (arg) => {
  const snippet = [
    `display.text("Current time ${arg}", 50, 50, 0xffffff)`,
    'display.text("------------", 50, 150, 0xffffff)'
  ];

  return snippet.join('\n');
};