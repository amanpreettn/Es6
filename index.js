let arr=["abc","abc","bce","abc"];
// function unique(arr) {
//     // return arr.forEach(element => {
//     //     console.log(element)
//     //     var set=new Set(arr);
//     //     return set
//     // });
//     return Array.from(new Set(arr))
// }
console.log(new Set(arr))
// console.log(unique(arr))

// Filter Anagram
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

function filter(arr1){
    let map=new Map();
    for(let word of arr1){
        let sorted=word.toLowerCase().split('').sort().join('')
        map.set(sorted,word)
    }
    return Array.from(map.values())
}
let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(filter(arr1))




const myobject={
    fname:"aman",
    lname:"singh",
    fullname:function(){
        return this.fname;
    }
}
const result=myobject.fullname()
console.log(result)

function increment(x) {
    return x + 1;
  }
  
  function counter() {
    let count = 0;
  
    return function callsCounter() {
      count = increment(count);
      return count;
    }
  }
  
  const myCounter = counter()
  
  console.log(myCounter())
  console.log(myCounter())
