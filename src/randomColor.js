export default function randomColor() {
  let guessedColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return guessedColor;
}
