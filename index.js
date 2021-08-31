import Edge from "./edge.js";
import RandomRobot from "./randomRobot.js";
import OptimizedRobot from "./optimizedRobot.js"

const roads = [
    "Alice's House-Bob's House-1", "Alice's House-Cabin-2",
    "Alice's House-Post Office-3", "Bob's House-Town Hall-4",
    "Daria's House-Ernie's House-5", "Daria's House-Town Hall-6",
    "Ernie's House-Grete's House-7", "Grete's House-Farm-8",
    "Grete's House-Shop-9", "Marketplace-Farm-10",
    "Marketplace-Post Office-11", "Marketplace-Shop-12",
    "Marketplace-Town Hall-13", "Shop-Town Hall-14"
    ];
const townGraph = makeGraph(roads);

function makeGraph(roadList){
    let graph = new Object(null);
  
    for(let road of roadList){
        let edge = road.split("-");
        let from = edge[0];
        let to = edge[1];
        let weight = edge[2];
  
        graph[from] == null ? graph[from] = [new Edge(to, weight)] : graph[from].push(new Edge(to, weight));
        graph[to] == null ? graph[to] = [new Edge(from, weight)] : graph[to].push(new Edge(from, weight));
    }
  
    return graph;
  }

let runRobots = (graph, start, parcels) => {
    let randomRobot = new RandomRobot(graph, start, parcels);
    //let optimizedRobot = new OptimizedRobot(graph, start, parcels);
    randomRobot.deliver();
    //optimizedRobot.deliver();
}


/**
 * *** TESTING ONLY ***
 */

let parcels = [{address: "Alice's House"}, {address: "Bob's House"}, {address: "Town Hall"}, {address: "Town Hall"}, {address: "Grete's House"}, {address: "Ernie's House"}, {address: "Daria's House"}];

runRobots(townGraph, "Post Office", parcels)