import {resources} from "./itemClass";
import startResources from "./resources";
import { navBar } from "./views";

function startGame() {
    startResources()
    navBar()
}

export {startGame, resources}