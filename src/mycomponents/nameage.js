import React from 'react';

class NameAge extends React.Component{
    constructor(){
      super();
      this.state={
        petList:[],
        petName:"",
        petAge:''
      }
    }
    handleNameInput=(event)=>{
      this.setState({petName:event.target.value});
    }
  
    handleAgeInput=(event)=>{
      this.setState({petAge:event.target.value});
    }
    handleClick=()=>{
      let petObj = {petName:this.state.petName, petAge: this.state.petAge};
      this.setState({petList: [...this.state.petList, petObj], petName:"", petAge:0 });
    }
    render(){
      let petElementArr = this.state.petList.map((animal, index)=>{
        return(
          <div key={index}>
            <div>Name: {animal.petName}</div>
            <div>Age: {animal.petAge}</div>
          </div>
        )
      })
      return(
        <div>
          <h4>Pet List</h4>
          {petElementArr}
          <input value={this.state.petName} onChange={this.handleNameInput} placeholder="Pet Name"/>
          <input value={this.state.petAge} onChange={this.handleAgeInput} placeholder="Pet Age"/>
          <button onClick={this.handleClick}>Add Animal</button>
        </div>
      )
    }
  }

export default NameAge;