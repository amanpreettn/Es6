class Node{
    constructor(){
        this.data=0;
        this.link=null;
    }
}
class Stack_using_LinkedList{
    constructor(){
        this.top=null;
    }
    push(x){
        let temp=new Node();
        if(temp==null){
            console.log("Stack is overflow")
        }
        temp.data=x;
        temp.link=this.top;
        this.top=temp
    }
    isEmpty(){
        return this.top==null;
    }
    peek(){
        if(!this.isEmpty()){
            return this.top.data;
        }
        else{
            console.log("Stack is empty");
            return -1;
        }
    }
    pop(){
        if(this.top==null){
            console.log("Stack is undeflow");
            return;
        }
        this.top=this.top.link;
    }
    display(){
        if(this.top==null){
            console.log("Stack is Overflow")
        }
        else{
            let temp=this.top;
            while(temp!=null){
                console.log(temp.data+"->");
                temp=temp.link;
            }
        }
    }
}
let obj=new Stack_using_LinkedList()
console.log("Insert a element")
obj.push(10);
obj.push(20);
console.log("display the element")
obj.display()
console.log("Top of the element")
console.log(obj.peek())
console.log("Remove the element")
obj.pop()
console.log("display the element")
obj.display()