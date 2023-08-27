import { initResource } from "./itemClass"
import initBuilding from './buildingClass'

const raw = 'raw'
const low = 'lower-intermediates'
const high = 'higher-intermediates'
const science = 'science'
const building = 'buildings'

//initresource ( name of item, function(array of objects required to build), category of tab)
//initbuilding ( same as above, then function(array of objects that is produced), time it takes to produce)
function startResources() {
    initResource('wood', [], raw)
    initResource('stone', [], raw)
    initResource('coal', [], raw)
    initResource('brick', add([{'stone': 1},{'coal': 1}]), low)
    initResource('iron ore', [], raw)
    // initBuilding('stone furnace', add([{'stone'}]))
    initBuilding('miner', add([{'brick': 5}]), building, add([{'stone': 1},{'coal': 1}]), 5)
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

