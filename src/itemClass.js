import {addButtonView, updateResourceView} from './views'

class Item {
    constructor(name, require, category) {
        this.name = name
        this.count = 0
        this.require = require
        this.category = category
    }

    createButton() {
        const button = addButtonView(this)
        button.addEventListener('click', () => {
            if (this.require.length == 0) {
                this.buildItem()
            } else {
                if(this.checkBuild()) {
                    this.buildItem()
                }
            }
        })
    }

    checkBuild() {
        let requireNumber = this.require.length
        this.require.forEach(element => {
            const item = resources.find(({ name }) => name == element.name)
            if (item.count >= element.count) {
                requireNumber -= 1
            }
        });
        if (requireNumber == 0) {
            this.require.forEach(element => {
                const item = resources.find(({ name }) => name == element.name)
                item.count -= element.count
                updateResourceView(item)
            });
            return true
        }
    }
    
    buildItem() {
        const item = resources.find(({ name }) => name == this.name)
        item.count += 1
        updateResourceView(item)
    }
}

const resources = []

function initResource(name, require, category) {
    const item = new Item(name, require, category)
    resources.push(item)
    item.createButton()
}

export {Item, initResource, resources}