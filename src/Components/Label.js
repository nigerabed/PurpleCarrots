export default function Label(text) {
  let label = document.createElement("label");
  let input = document.createElement("input");
  label.innerText = text;

  label.append(input);

  return label;
}
