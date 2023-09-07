import { buttonView, updateButtonView } from "../views/button.js";

export class Item {
  constructor(name, category) {
    this.name = name;
    this.count = 0;
    this.category = category;
  }

  createButton() {
    const button = buttonView(this);
    button.addEventListener("click", (e) => this.add());
  }

  add() {
    this.count += 1;
    console.log(this.count);
    updateButtonView(this);
  }
}

const rawItems = [
  ["stone", "raw"],
  ["iron-ore", "raw"],
  ["copper-ore", "raw"],
  ["brick", "processed"],
];

const items = [];
export function createItems() {
  rawItems.forEach((element) => {
    const item = new Item(element[0], element[1]);
    items.push(item);
    item.createButton();
  });
}
