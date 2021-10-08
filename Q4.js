class car{
    constructor(name){
        this.name=name;
    }
    static hello(x){
        return "Hello"+x.name
    }
}
let obj=new car("Ford")
console.log(car.hello(obj))