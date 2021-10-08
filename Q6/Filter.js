const filter=(arr1)=>{
    let map=new Map();
    for(let word of arr1){
        let sorted=word.split('').sort().join('')
        map.set(sorted,word)
    }
    return Array.from(map.values())
}
module.exports={filter}