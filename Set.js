class SetImplement {
  constructor() {
    this.arr = [];
  }
  add(ele) {
    this.arr.push(ele);
    return this;
  }
  has(ele) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] == ele) {
        return true;
      }
    }
    return false;
  }
  clear() {
   this.arr.splice(0, this.arr.length);
    return this.arr;
  }
  get size() {
    //var arr_size=arr.length;
    return this.arr.length;
  }
  delete(val) {
    // console.log(val)
    var delete_ele = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] == val) {
        delete_ele = this.arr.splice(i, 1);
      }
    }
    console.log(this.arr);
  }
}
let obj = new SetImplement();
console.log(obj.add(1).add(2));
console.log(obj.add(2));
console.log(obj.has(2))
// console.log(obj.clear())
console.log(obj.size);
obj.delete(2)
