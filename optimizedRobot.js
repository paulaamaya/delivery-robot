import Robot from './robot.js';
import { dijkstra, removeDuplicates, permuteArray } from './search.js';

class OptimizedRobot extends Robot {

  findOptimalPath(start, end) {
    let permutations = permuteArray(removeDuplicates(this.parcels.map(x => x.address)));

    let minCost = Infinity;
    let minPath;

    for(let permutation of permutations){
      let cost = 0;
      let parcelPath = [start, ...permutation, end];
      let traveledPath = [];

      for(let i = 0; i < parcelPath.length - 1; i++){
        let d = dijkstra(this.graph, parcelPath[i], parcelPath[i + 1]);
        cost += d.distance;
        traveledPath = traveledPath.concat(d.path.slice(0, -1));
      }

      if(cost < minCost) {
        minCost = cost;
        minPath = traveledPath;
      }
    }

    return {minPath: minPath.concat([start]), minCost};
  }

  deliver(){
    let { minPath, minCost } = this.findOptimalPath(this.start, this.start);
    for(let stop of minPath){
      this.move(stop);
    }

    console.log(`Delivered all packages in ${minPath.length} stops.\nTotal distance traveled was ${minCost}.`)
  }

  move(stop){
    console.log(`Moving to ${stop}...`);
    this.place = stop;
    this.parcels = this.parcels.filter(parcel => parcel.address != this.place);
  }
}

export default OptimizedRobot;
