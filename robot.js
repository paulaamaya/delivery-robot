class Robot{
    constructor(graph, start, parcels){
        this.graph = graph;
        this.start = start;
        this.place = start;
        this.parcels = parcels;
    }

    deliver(){
        throw new Error("You have to implement the deliver method!")
    }
}

export default Robot;
