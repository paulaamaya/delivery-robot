import Queue from "./queue.js"

function dijkstra(graph, start, end){

    let distances = {};
    for(key in graph){
        distances[key] = Infinity;
    }
    distances[start] = 0;

    // TO-DO: Write Dijkstra's path finding algorithm
    
}

function removeDuplicates(array){

  // TO-DO: Write functions that removes duplicates from given array

}

function permuteArray(array){
  
  // TO-DO: Write function that returns a 2D array of all permutations of given array
}


/**
 * *** TESTING ONLY ***
 */

const roads = [
  "a-b", "a-c",
  "a-d", "b-e",
  "f-g", "f-e",
  "g-h", "h-i",
  "h-k", "j-i",
  "j-d", "j-k",
  "j-e", "k-e"
  ];

const testGraph = makeGraph(roads);


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

console.log(testGraph);



