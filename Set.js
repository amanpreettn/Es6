var arr=[]
class Set_implement{
    add(ele){
        return arr.push(ele)
    }
    has(ele){
        for(let i=0;i<arr.length;i++){
            if(arr[i]==ele)
            {
                return true;
            }
        }
        return false
    }
    clear(){
        arr.splice(0,arr.length)
        return arr
    }
    size(){
        var arr_size=arr.length;
        return arr_size
    }
    delete(val){
       // console.log(val)
       var delete_ele=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==val){
                delete_ele= arr.splice(i,1)
            }
        }
        console.log(arr)
    }
}
let obj=new Set_implement()
console.log(obj.add(1))
console.log(obj.add(2))
console.log(obj.has(2))
 //console.log(obj.clear())
console.log(obj.size())
obj.delete(2)
