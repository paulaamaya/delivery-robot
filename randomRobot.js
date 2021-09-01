import Robot from './robot.js';

class RandomRobot extends Robot{
    
    move(edge){
        if(this.graph[this.place].includes(edge)){
            console.log(`Moving to ${edge.to}...`)
            this.place = edge.to;
            this.parcels = this.parcels.filter(parcel => parcel.address != this.place);
            return true;
        }
        return false;
        // This might become a Robot class method (?)
    }

    randomPick(){
        let x = Math.floor(Math.random() * this.graph[this.place].length);
        return this.graph[this.place][x];
    }

    deliver(){
        let count = 0;
        let distance = 0;
        while(!(this.parcels.length == 0) || !(this.place == this.start)){
            let nextEdge = this.randomPick();
            this.move(nextEdge);
            // Perhaps we should check if move is valid for completion sake (?)
            count++;
            distance += nextEdge.weight;
        }
        console.log(`Delivered all packages in ${count} stops.\nTotal distance traveled was ${distance}.`)
    }
}

export default RandomRobot;