// var map=new Map()
// map.set("first name", "sumit");
// map.set("last name", "ghosh");
// map.set("website", "geeksforgeeks")
//     .set("friend 1","gourav")
//     .set("friend 2","sourav")
// console.log(map)
// console.log(map.has("first name"));
// console.log(map.has("First"))
// console.log(map.get("first name"));
// console.log(map.delete("first name"));
// //map.clear()
// for(var ele of map.entries())
// console.log(ele);
// for(var ele of map.keys()){
//     console.log(ele)
// }
// for(var ele of map.values())
// console.log(ele)
// console.log(map)
// console.log("-----key values pair--------")
// function print_values(values,key,map){
//     console.log(key,"---",values)
// }
// map.forEach(print_values)
// console.log(" Map.prototype[@@iterator]()")
// var getit=map[Symbol.iterator]()
// for(var ele of getit)
// console.log(ele)

class Map{
    add(){
        var obj={}
        obj.name="aman";
        obj.age=10
        return obj
    }
    clear(obj){
        return arr.splice(0,obj.length)
    }
    has(){
        obj.hasOwnProperty()
    }
}
let obj=new Map();
console.log("Set elements")
console.log(obj.add())
console.log(obj.clear())
