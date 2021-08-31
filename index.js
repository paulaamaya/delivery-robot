import RandomRobot from "./randomRobot.js";
import OptimizedRobot from "./optimizedRobot.js"

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];
const townGraph = makeGraph(roads);

function makeGraph(roadList){
    let graph = new Object(null);

    for(let road of roadList){
        let edge = road.split("-");
        let from = edge[0];
        let to = edge[1];

        graph[from] == null ? graph[from] = [to] : graph[from].push(to);
        graph[to] == null ? graph[to] = [from] : graph[to].push(from);
    }

    return graph;
}

let runRobots = (graph, start, parcels) => {
    let randomRobot = new RandomRobot(graph, start, parcels);
    let optimizedRobot = new OptimizedRobot(graph, start, parcels);
    randomRobot.deliver();
    optimizedRobot.deliver();
}


/**
 * *** TESTING ONLY ***
 */

let parcels = [{address: "Alice's House"}, {address: "Bob's House"}, {address: "Town Hall"}, {address: "Town Hall"}, {address: "Grete's House"}];

runRobots(townGraph, "Post Office", parcels)


