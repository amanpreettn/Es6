class Node{
    constructor(ele){
        this.ele=ele
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
        this.tail=null;
    }
    List_size(){
        return this.size;
    }
    add_first(ele){
        var node=new Node(ele)
        var curr;
       if(this.size==0){
           this.tail=node;
           this.head=node;
       }
       else{
           node.next=this.head;
           this.head=node;
       }
       this.size++
    }
    add_last(ele){
        var node=new Node(ele)
        if(this.size==0){
            this.tail=node;
            this.head=node;
        }
        else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }
    remove_first(ele){
        if(this.size==0){
            console.log("Empty List")
            return -1;
        }
        var rnode=new Node(this.head)
        if(this.size==1){
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=this.head.next;
            rnode.next=null;
        }
        this.size--
        return rnode.ele

    }
    get_First(){
        if(this.size==0){
            console.log("Empty List!")
            return -1;
        }
        return this.head.ele
    }
    get_Last(){
        if(this.size==0){
            console.log("Empty List")
            return -1;
        }
        return this.tail.ele
    }
    prinlist(){
        var curr=this.head;
        var str=""
        while(curr){
            str+=curr.ele+" "
            curr=curr.next;
        }
        console.log(str)
    }

}
var ll=new LinkedList();
// ll.add_first(10)
// ll.add_first(20)
// ll.add_last(30)
// ll.remove_first()
// ll.prinlist()
// ll.get_First()
// ll.get_Last()
// for(let i=0;i<10;i++){
//     ll.add_first(i*10)
// }
for(let i=0;i<10;i++){
    ll.add_last(i*10)
}
ll.prinlist()
console.log("----Get First-----")
console.log(ll.get_First())
console.log("----Get Last----")
console.log(ll.get_Last())
console.log("----Size of List----")
console.log(ll.List_size())