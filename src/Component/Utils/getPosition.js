export default element => {
  let xPosition = 0;
  let yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.clientLeft);
    yPosition += (element.offsetTop - element.clientTop);
    element = element.offsetParent;
  }
  return { x: xPosition, y: yPosition };
};