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

}

export {startGame, resources}