export function buttonView(item) {
  const button = document.createElement("button");

  const number = document.createElement("p");
  number.setAttribute("id", `${item.name}-number`);
  number.textContent = item.count;
  const name = document.createElement("p");
  name.textContent = item.name;

  const dialog = document.createElement("span");
  dialog.setAttribute("class", "tooltiptext");
  dialog.textContent = "Hello!";

  button.append(number, name, dialog);
  const section = document.getElementById(item.category);
  section.append(button);

  return button;
}

export function updateButtonView(item) {
  const number = document.querySelector(`#${item.name}-number`);
  number.textContent = item.count;
}
