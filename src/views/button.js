export function buttonView(item) {
  const section = document.getElementById(`${item.category}-content`);
  const div = document.createElement("div");
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

  const adjust = document.createElement("div");
  const plus = document.createElement("button");
  plus.setAttribute("class", "auto-adjust");
  plus.textContent = "+";
  const minus = document.createElement("button");
  minus.setAttribute("class", "auto-adjust");
  minus.textContent = "-";
  adjust.append(minus, plus);

  div.append(button, adjust);
  section.append(div);

  return button;
}

export function updateButtonView(item) {
  const number = document.querySelector(`#${item.name}-number`);
  number.textContent = item.count;
}
