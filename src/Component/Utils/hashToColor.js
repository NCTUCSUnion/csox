const palette = [
  '#333333',
  '#f57373',
  '#787878',
  '#398fff',
  '#63ba84',
  '#56badb',
];

const hashToColor = text => {
  let hash = 0;
  const len = text.length > 4 ? 4 : text.length;
  for (let i = 0; i < len; i++){
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  return palette[hash % 6];
};

export default hashToColor;
