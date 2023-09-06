import { items } from ".";

const content = document.getElementById("content");

export function buttonView(item) {
  const button = document.createElement("button");
  button.textContent = item.name;

  content.append(button);
  return button;
}
