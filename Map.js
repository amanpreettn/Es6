class MapImplement{
    constructor(){
        this.map={}
    }
   set(key,val){
       //console.log(key)
       this.map[key]=val
       return this
   }
   size(){
       var keys=Object.keys(this.map)
       return keys.length
   }
   delete(key){
       return delete this.map[key]
   }
   has(key){
    if(this.map.hasOwnProperty(key)){
        return true
    }
    return false
   }
}
let obj=new MapImplement();
console.log("Set elements")
console.log(obj.set("aman",21).set("Arun",23).set("arjun",20))
console.log(obj.size())
console.log(obj.delete("aman"))
console.log(obj.has("aman"))
