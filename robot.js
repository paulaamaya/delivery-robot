class Robot{
    constructor(graph, place, parcels){
        this.graph = graph;
        this.place = place;
        this.parcels = parcels;
    }

    deliver(){
        throw new Error("You have to implement the deliver method!")
    }
}

export default Robot;
