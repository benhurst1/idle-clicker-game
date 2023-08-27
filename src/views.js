const resourceDiv = document.getElementById('resources')

function addButtonView(element) {
    //create resource view area, add button, text and number
    const resource = document.createElement('div')
    resource.setAttribute('id', element.name)
    resource.setAttribute('class', 'resource')
    
    const button = document.createElement('button')
    button.setAttribute('id', `${element.name}-button`)

    const number = document.createElement('p')

    resource.appendChild(number)
    resource.appendChild(button)
    button.textContent = element.name
    number.textContent = element.count

    element.require.forEach(piece => {
        let name = document.createElement('p')
        name.textContent = `${piece.count} ${piece.name}`
        button.appendChild(name)
    });

    const resourceTab = document.getElementById(element.category)
    resourceTab.appendChild(resource)
    return button
}

function updateResourceView(item) {
    const resource = document.getElementById(item.name)
    resource.childNodes[0].textContent = item.count
}


function navBar() {
    //using tabs package
    var container=document.querySelector('.tab-container')
    tabs(container);
}

export {addButtonView, updateResourceView, navBar}