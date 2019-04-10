import React, { Component } from 'react';
import Nuvento from './Nuvento';
import AddNuvento from './AddNuvento';

class App extends Component {
  state = {
    nuvento: [
      {name :'Binish', gender :'male', salary :10000, id:1},
      {name :'Alen', gender :'male', salary :20000, id:2},
      {name : 'Jilty', gender :'female', salary :50000, id:3}
    ]
  }

  addNuvento = (nuvento) =>{
    nuvento.id=Math.random();
    let nuv =[...this.state.nuvento,nuvento]
    this.setState(
      {
        nuvento:nuv
      }
   )
  }

  deleteNuvento = (id) =>{
    let nuv = this.state.nuvento.filter(n =>{
      return n.id !== id
    })
    this.setState(
      {
        nuvento:nuv
      }
      )
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome Nuvento,</h1> 
        <Nuvento nuvento={this.state.nuvento} deleteNuvento = {this.deleteNuvento}/>      
        <AddNuvento addNuvento ={this.addNuvento} /> 
      </div>
    );
  }
}

export default App;
