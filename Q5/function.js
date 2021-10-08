// export  function circle(x) {
//    const pi=3.14;
//    const are_circle=Math.pow(x,2)*pi
//     console.log(are_circle)
//   }
//  export  function rectangle(l,b,h){
//      const area_rectangle=l*b*h
//      console.log(area_rectangle)
//  }
//  export default function cylinder(r,h){
//      const pi=3.14
//      const CSA=(2*pi*r*h)
//      const TSA=CSA+(2*pi*Math.pow(r,2))
//      console.log(TSA)
//  }
  function circle(x) {
    const pi=3.14;
    const area_circle=Math.pow(x,2)*pi
     return area_circle
   }
    function rectangle(l,b,h){
      const area_rectangle=l*b*h
      return area_rectangle
  }
    function cylinder(r,h){
      const pi=3.14
      const CSA=(2*pi*r*h)
      const TSA=CSA+(2*pi*Math.pow(r,2))
      return TSA
  }
  module.exports = {circle,rectangle,cylinder}