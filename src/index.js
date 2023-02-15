//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';

//Every component can have it`s own data
class A extends React.Component{
    //1. Properties
    state;

    //2. Constructor
    constructor(){
        super();
        this.state = {name:"Neha",surname:"Sharma",address:"Indore"}

        
    }

    //3. Methods
    render(){
        this.setState({
            ...this.state,  //... is spread operator ES6
            name:"Sakshi"
        });
        //Every method should be return
        return <>
                 <h1>Good Morning {this.state.name} {this.state.surname}</h1>
                 <h1>{this.state.address}</h1>
                 <h1>{this.props.name}</h1>
                 <h1>{this.props.surname}</h1>
                 <h1>{this.props.children}</h1>
               </>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="Saloni"surname="Modi">Dewas</A>);