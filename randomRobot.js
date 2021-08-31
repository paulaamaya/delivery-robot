import Robot from './robot.js';

class RandomRobot extends Robot{
    
    move(destination){
        if(this.graph[this.place].includes(destination)){
            console.log(`Moving to ${destination}...`)
            this.place = destination;
            this.parcels = this.parcels.filter(parcel => parcel.address != this.place);
            return true;
        }
        return false;
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
            count++;
        }
        console.log(`Delivered all packages in ${count} stops.`)
    }
}

export default RandomRobot;