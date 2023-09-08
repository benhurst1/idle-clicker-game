import { buttonView, updateButtonView } from "../views/button.js";

export class Item {
  constructor(name, category, require) {
    this.name = name;
    this.count = 0;
    this.category = category;
    this.require = require;
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
  ["brick", "processed", [addRequire(["stone", 1])]],
];

function addRequire(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

const items = [];
export function createItems() {
  rawItems.forEach((element) => {
    const item = new Item(element[0], element[1], element[2]);
    items.push(item);
    item.createButton();
  });
}
