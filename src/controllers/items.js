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
    button.addEventListener("click", (e) => this.check());
  }

  add() {
    this.count += 1;
    updateButtonView(this);
  }

  check() {
    let length = this.require.length;
    if (length == 0) {
      this.add();
    } else {
      this.require.forEach((requireElement) => {
        const item = items.find(
          (element) => element.name == requireElement.name
        );
        if (item.count >= requireElement.count) {
          length -= 1;
        }
      });
      if (length == 0) {
        this.require.forEach((requireElement) => {
          const item = items.find(
            (element) => element.name == requireElement.name
          );

          item.count -= requireElement.count;
          updateButtonView(item);
        });
        this.add();
      }
    }
  }
}

const rawItems = [
  ["stone", "raw", []],
  ["iron-ore", "raw", []],
  ["copper-ore", "raw", []],
  ["coal", "raw", []],
  [
    "brick",
    "processed",
    addRequire([
      ["stone", 1],
      ["coal", 1],
    ]),
  ],
];

function addRequire(array) {
  const items = [];
  array.forEach((element) => {
    items.push({ name: element[0], count: element[1] });
  });
  return items;
}

const items = [];
export function createItems() {
  rawItems.forEach((element) => {
    const item = new Item(element[0], element[1], element[2]);
    items.push(item);
    item.createButton();
  });
}
