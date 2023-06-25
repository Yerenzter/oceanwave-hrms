/*
- SliderJS 
- Created by Yerenzter.
*/

class Slider {
    constructor(vector) {
        this.count = 0;
        this.total = vector.length - 1;
        this.vector = vector;
    }
    
    Previous() {
        return this.vector[(this.count == 0? (this.count=this.total+1, this.count--) : this.count--)-1];
    }
    
    Next() {
        return this.vector[(this.count == this.total ? (this.count=-1, this.count++) : this.count++)+1];
    }
}