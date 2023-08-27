import { initResource } from "./itemClass"
import initBuilding from './buildingClass'

const raw = 'raw'
const low = 'lower-intermediates'
const high = 'higher-intermediates'
const science = 'science'
const building = 'buildings'

function startResources() {
    initResource('wood', [], raw)
    initResource('stone', [], raw)
    initResource('coal', [], raw)
    initResource('brick', add([{'stone': 1},{'coal': 1}]), low)
    initResource('iron ore', [], raw)
    // initBuilding('stone furnace', add([{'stone'}]))
    initBuilding('stone miner', add([{'brick': 5}]), building, add([{'stone': 1}]), 5)
}

function add(object) {
    const array = []
    object.forEach((element) => {
        const key = Object.keys(element)
        const value = Object.values(element)
        array.push({name: key, count: value})
    });
    return array
}

export default startResources

