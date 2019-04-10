import React, { Component } from 'react';

class AddNuvento extends Component {
    state ={
        name:null,
        gender:null,
        salary:null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNuvento(this.state);
    }

  render() {
      
    return (
      <div className="add-nuvento"> 
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Name:</label>  
            <input type="text" id='name' onChange={this.handleChange}/> 
            
            <label htmlFor='gender'>Gender:</label>  
            <input type="text" id='gender'onChange={this.handleChange}/>              
            
            <label htmlFor='salary'>Salary:</label>  
            <input type="text" id='salary'onChange={this.handleChange}/> 
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNuvento;