export default function snapToGrid(x, y) {
  const snappedX = Math.round(x / 32) * 32;
  const snappedY = Math.round(y / 32) * 32;
  console.log('snapped X and Y', [snappedX, snappedY]);
  return [snappedX, snappedY];
}
