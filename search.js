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
  for(let edgeName of edgeList){
    if(!(edgeName in m)){
      m[edgeName] = true;
      ans.push(edgeName);
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


/**
 * *** TESTING ONLY ***
 */

// const roads = [
//   "a-b-3", "a-c-4",
//   "a-d-10", "b-e-2",
//   "f-g-5", "f-e-1",
//   "g-h-9", "h-i-3",
//   "h-k-7", "j-i-2",
//   "j-d-15", "j-k-4",
//   "j-e-2", "k-e-7"
//   ];

export { dijkstra, removeDuplicates, permuteArray };
