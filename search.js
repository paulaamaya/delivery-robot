import Queue from "./queue.js";
import Edge from "./edge.js";

function dijkstra(graph, start, end){

    let distances = {};
    for(key in graph){
        distances[key] = Infinity;
    }
    distances[start] = 0;

    // TO-DO: Write Dijkstra's path finding algorithm
    
}

function removeDuplicates(edgeList){
  let m = {};
  let ans = [];
  for(let edge of edgeList){
    if(!m[edge.to]){
      m[edge.to] = true;
      ans.push(edge);
    }
  }
  return ans;
}

function permuteArray(array){
  
  // TO-DO: Write function that returns a 2D array of all permutations of given array
}

function findOptimalPath(start, end, stops){

  // TO-DO: Write function that finds the optimal path from <start> to <end> while visiting all the nodes in <stops>
}


/**
 * *** TESTING ONLY ***
 */

const roads = [
  "a-b-3", "a-c-4",
  "a-d-10", "b-e-2",
  "f-g-5", "f-e-1",
  "g-h-9", "h-i-3",
  "h-k-7", "j-i-2",
  "j-d-15", "j-k-4",
  "j-e-2", "k-e-7"
  ];

const testGraph = makeGraph(roads);


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

const pseudoEdges = [{to: "Alice's House"}, {to: "Bob's House"}, {to: "Town Hall"}, {to: "Town Hall"}, {to: "Grete's House"}, {to: "Ernie's House"}, {to: "Ernie's House"}];

console.log(removeDuplicates(pseudoEdges));



