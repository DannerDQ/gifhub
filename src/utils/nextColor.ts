const colors = ["#ff743d", "#f25eb2", "#57c8e7", "#48ce4a", "#ddd123"];

export default function* nextColor() {
  let prevIndex = -1;
  while (true) {
    let index = Math.floor(Math.random() * colors.length);

    while (index === prevIndex) {
      index = Math.floor(Math.random() * colors.length);
    }

    prevIndex = index;

    yield colors[index];
  }
}
