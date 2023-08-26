import { resources } from "./itemClass"

const resourceDiv = document.getElementById('resources')
const building = document.getElementById('building')

function startResourceView() {
    resources.forEach(element => {
        const resource = document.createElement('div')
        resource.setAttribute('id', element.name)
        const name = document.createElement('p')
        const number = document.createElement('p')

        resource.appendChild(name)
        resource.appendChild(number)
        name.textContent = element.name
        number.textContent = element.count

        resourceDiv.appendChild(resource)
    });
}

function updateResourceView(item) {
    const resource = document.getElementById(item.name)
    resource.childNodes[1].textContent = item.count
}

function addButtonView(name) {
    const button = document.createElement('button')
    button.textContent = name
    button.id = `${name}-button`
    building.appendChild(button)
    return button
}

export {addButtonView, updateResourceView, startResourceView}