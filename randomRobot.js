import Robot from './robot.js';

// TO-DO: Update for new edge objects
class RandomRobot extends Robot{
    
    // TO-DO: Update to inform user of distance travelled
    move(destination){
        if(this.graph[this.place].includes(destination)){
            console.log(`Moving to ${destination}...`)
            this.place = destination;
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
        while(!(this.parcels.length == 0) || !(this.place == "Post Office")){
            let nextStop = this.randomPick();
            this.move(nextStop);
            // Perhaps we should check if move is valid for completion sake (?)
            count++;
        }
        console.log(`Delivered all packages in ${count} stops.`)
    }
}

export default RandomRobot;