import Edge from "./edge.js";
import RandomRobot from "./randomRobot.js";
import OptimizedRobot from "./optimizedRobot.js"

// const roads = [
//     "Alice's House-Bob's House-1", "Alice's House-Cabin-2",
//     "Alice's House-Post Office-3", "Bob's House-Town Hall-4",
//     "Daria's House-Ernie's House-5", "Daria's House-Town Hall-6",
//     "Ernie's House-Grete's House-7", "Grete's House-Farm-8",
//     "Grete's House-Shop-9", "Marketplace-Farm-10",
//     "Marketplace-Post Office-11", "Marketplace-Shop-12",
//     "Marketplace-Town Hall-13", "Shop-Town Hall-14"
//     ];
const roads = [
  "a-b-3", "a-c-4",
  "a-d-10", "b-e-2",
  "f-g-5", "f-e-1",
  "g-h-9", "h-i-3",
  "h-k-7", "j-i-2",
  "j-d-15", "j-k-4",
  "j-e-2", "k-e-7"
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
    let optimizedRobot = new OptimizedRobot(graph, start, parcels);
    randomRobot.deliver();
    optimizedRobot.deliver();
}


/**
 * *** TESTING ONLY ***
 */

// let parcels = [{address: "Grete's House"}, {address: "Alice's House"}, {address: "Bob's House"}, {address: "Town Hall"}, {address: "Daria's House"}, {address: "Ernie's House"}, {address: "Daria's House"}];
let parcels = [{address: "h"}, {address: "a"}, {address: "b"}, {address: "c"}, {address: "d"}, {address: "e"}, {address: "d"}];

runRobots(townGraph, "g", parcels);