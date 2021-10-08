    class person{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
    }
    class employee extends person{ 
        constructor(name,age){
            super(name,age)
        }
    }
    class developers extends employee{
        constructor(name,age){
            super(name,age)
        }
        static getdata(){
            console.log(this.name+" "+this.age)
        }
    }
    const obj=new developers("aman",23)
    developers.getdata(obj)