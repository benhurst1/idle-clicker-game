import initBuilding from "./buildingClass";
import {resources, initResource} from "./itemClass";
import { startResourceView, updateResourceView } from "./views";

function startGame() {
    startResources()
    startResourceView()
}

function startResources() {
    initResource('stone', [])
    initResource('coal', [])
    initResource('brick', [{
        name: 'stone',
        count: 1
    },{
        name: 'coal',
        count: 1
    }])
    initBuilding('stone furnace', [{
        name: 'stone',
        count: 10
    }],[{
        name: 'brick',
        count: 1
    }], 5)
    initBuilding('stone miner', [{
        name: 'brick',
        count: 20
    }], [{
        name: 'stone',
        count: -1
    }], 5)
    initBuilding('coal miner', [{
        name: 'brick',
        count: 20
    }], [{
        name: 'coal',
        count: -1
    }], 5)
}

export {startGame, resources}