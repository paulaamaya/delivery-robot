class Queue {
    constructor(){
      this.list = []; 
    }
  
    isEmpty(){
      return this.list.length == 0;
    }
  
    enqueue(o){
      this.list.push(o);
    }
    
    dequeue(){
      if(this.isEmpty()) return null;
      return this.list.shift();
    }
  }

export default Queue;