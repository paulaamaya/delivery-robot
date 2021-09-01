import Queue from "./queue.js";
import Edge from "./edge.js";

function removeItem(list, value) {
  var index = list.indexOf(value);
  if (index !== -1) {
    list.splice(index, 1);
  }
}

function dijkstra(graph, start, end){
  
  let shortestDistance = {};
  let previous = {};
  let unvisited = Object.keys(graph);

  for(let nodeName in graph){
    shortestDistance[nodeName] = Infinity;
  }
  shortestDistance[start] = 0;

  while(unvisited.length > 0){
    
    let closestNode = unvisited[0];

    for(let node of unvisited){
      if(shortestDistance[node] < shortestDistance[closestNode]) closestNode = node;
    }

    let neighbours = graph[closestNode];

    for(let neighbourEdge of neighbours){
      let neighbour = neighbourEdge.to;
      let currDistance = shortestDistance[neighbour];
      let newDistance = shortestDistance[closestNode] + neighbourEdge.weight;

      if(newDistance < currDistance){
        shortestDistance[neighbour] = newDistance;
        previous[neighbour] = closestNode;
      }
    }
    removeItem(unvisited, closestNode);
  }
  return getPath(end, previous, shortestDistance[end]);
}

function getPath(end, map, distance){
  let ans = [];
  let node = end;
  let cost = 0;
  do{
    ans.push(node);
    node = map[node];
  } while (node !== undefined)
  return { distance, path: ans.reverse()};
}

function removeDuplicates(edgeList){
  let m = {};
  let ans = [];
  for(let edge of edgeList){
    if(!(edge.to in m)){
      m[edge.to] = true;
      ans.push(edge);
    }
  }
  return ans;
}

function permuteArray(array){

  let ans = []

  if(array.length <=1){
    ans.push(array);
    return ans;
  } else {
    for(let i = 0; i < array.length; i++){
      
      [array[0], array[i]] = [array[i], array[0]];
      
      let p = [array[0]];
      let subPermutations = permuteArray(array.slice(1));

      for(let permutation of subPermutations){
        ans.push(p.concat(permutation));
      }
    }
    return ans;
  }

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

// const pseudoEdges = [{to: "Alice's House"}, {to: "Bob's House"}, {to: "Town Hall"}, {to: "Town Hall"}, {to: "Grete's House"}];

console.log(dijkstra(testGraph, "g", "k"))


