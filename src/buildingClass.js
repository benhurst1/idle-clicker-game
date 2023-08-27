import {resources, Item} from "./itemClass"

class Building extends Item {
    constructor(name, require, category, produce, craftSpeed) {
        super(name, require, category)
        this.produce = produce
        this.craftSpeed = craftSpeed
    }

    producer() {
        if (this.count > 0) {
            this.produce.forEach(element => {
            let item = resources.find(({name}) => name == element.name)
            if (item.checkBuild()) {
                item.buildItem()
            }
        });
        setTimeout(() => {this.producer()}, 1000 / this.count * this.craftSpeed);
        } else {
            setTimeout(() => {this.producer()}, 1000);
        }
    }
}

function initBuilding(name, require, category, produce, craftSpeed) {
    const item = new Building(name, require, category, produce, craftSpeed)
    resources.push(item)
    item.producer()
    item.createButton()
}

export default initBuilding