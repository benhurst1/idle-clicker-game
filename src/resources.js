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
    // initResource('wood', [], raw)
    initResource('iron ore', [], raw)
    initResource('copper ore', [], raw)
    initResource('stone', [], raw)
    initResource('coal', [], raw)
    initResource('iron plate', add([{'iron ore': 5},{'coal': 1}]), raw)
    initResource('copper plate', add([{'iron ore': 5},{'coal': 1}]), raw)
    initResource('brick', add([{'stone': 5},{'coal': 1}]), raw)
    initResource('iron gears', add([{'iron plate': 1}]), low)
    initResource('copper wire', add([{'copper plate': 1}]), low)
    initResource('red science', add([{'iron gears': 3},{'copper plate': 1}]), science)
    initBuilding('iron miner', add([{'brick': 3},{'iron plate': 2},{'iron gears': 3}]), building, add([{'iron ore': 1}]), 1)
    initBuilding('copper miner', add([{'brick': 3},{'iron plate': 2},{'iron gears': 3}]), building, add([{'copper ore': 1}]), 1)
    initBuilding('stone miner', add([{'brick': 3},{'iron plate': 2},{'iron gears': 3}]), building, add([{'stone': 1}]), 1)
    initBuilding('coal miner', add([{'brick': 3},{'iron plate': 2},{'iron gears': 3}]), building, add([{'coal': 1}]), 1)
    initBuilding('iron furnace', add([{'brick': 5},{'iron plate': 2}]), building, add([{'iron plate': 1}]), 1)
    initBuilding('copper furnace', add([{'brick': 5},{'iron plate': 2}]), building, add([{'copper plate': 1}]), 1)
    initBuilding('brick furnace', add([{'brick': 5},{'iron plate': 2}]), building, add([{'brick': 1}]), 1)
    initBuilding('iron gear assembly', add([{'brick': 2},{'iron plate': 5},{'iron gears': 2}]), building, add([{'iron gear': 1}]), 1)
    initBuilding('copper wire assembly', add([{'brick': 2},{'iron plate': 5},{'iron gears': 2}]), building, add([{'copper wire': 1}]), 1)
    initBuilding('red science assembly', add([{'brick': 2},{'iron plate': 5},{'iron gears': 2}]), building, add([{'red science': 1}]), 1)
    
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

