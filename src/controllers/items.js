import { buttonView, updateButtonView } from "../views/button.js";

export class Item {
  constructor(name) {
    this.name = name;
    this.count = 0;
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

const rawItems = [["stone"], ["iron-ore"], ["copper-ore"]];

const items = [];
export function createItems() {
  rawItems.forEach((element) => {
    const item = new Item(element[0]);
    items.push(item);
    item.createButton();
  });
}
