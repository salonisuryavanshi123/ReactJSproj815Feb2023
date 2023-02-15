

class A{
    //1. Properties
    name; //This is declaration
    surname=''; //Declarartion and Intializtion
    address='Harda'; //Declaration and Intialization
    state;

    //2. Constructor
    constructor(){
        // The role of constructor is to initilize the properties
        //this.member
        this.name = 'Saloni';
        this.surname = "Modi";
        this.fatherName='Satish';
    }

    //3.Methods
    showName(){
        console.log(this.name+this.surname+this.address); // this is an internal object
    }

    setState(data){
        this.setState = data;
    }

    showState(){
        console.log(this.setState)
    }
} 


class B extends A{
    //1. Properties
    friend1; //This is only declaration
    friend2=''; //This is declaration and initialization

    //2. Constructor
    constructor(frnd3){  //frnd3 is a formal argument
        super();
        this.friend1='Sejal';
        this.friend2="Aashi";
        this.friend3=frnd3;
    }

    //3.Methods
    listMyFriends(){
        console.log(this.friend1);
        console.log(this.friend2);
        console.log(this.friend3);
    }

}


let obj2 = new B('Shruti');

obj2.setState({
    name:"Neha",
    surname:'Sharma'
});

obj2.showState();


//Lets create the class object
// let object = new ClassName();

let obj = new A();

obj2.listMyFriends();
obj2.showName();



// this obj is an external object
// object.member
//obj.showName();   // . is a member selection operator