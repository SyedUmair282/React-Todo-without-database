import React from 'react';
import './App.css'
import firebase from './firebase.js'


class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      edit:false,
      todos:[],
      value:'',
      key:''
    }
  }
  
  add_todo=()=>{
    let a=document.getElementById('text').value
    if(a == '')
    {
alert("Please Fill The Textfield..!!!!!");
    }
    else
    {
      let obj=this.state.value;
      this.state.todos.push(obj)
      this.setState({
        todos: this.state.todos,
        value:'',
      })
    
    }
    
  }
  delete_todo=(index)=>{
    
    this.state.todos.splice(index,1)
    this.setState({
      todos: this.state.todos,
    })
    
  }
  update_func=(e,index)=>{
    this.state.todos[index]=e.target.value
    this.setState({
      todos: this.state.todos
    })
    
  }
  edit_todo=()=>
  {
this.state.edit=true
this.setState({
  todos: this.state.todos,
})

  }
  updated=()=>
  {
    this.state.edit=false;
    this.setState({
      todos: this.state.todos
    })

  }
  
  render(){
    let {todos,value,edit} = this.state;
 
  return (
    
    <div className="main">
      <h1 className="head">Todo App</h1>
    <div className="input-group mb-3" >
    <input type="text"  value={value} maxLength='12' id="text" onChange={(e)=>this.setState({value:e.target.value})} className="form-control" placeholder="ENTER A TODO..!!" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
    <div className="input-group-append">
    <button onClick={this.add_todo} style={{fontWeight:'bold'}} className="btn btn-outline-danger" type="button">Add Todo</button>
    </div>
    </div>
    
    <div className="scroll">
    <ul>
      {todos.map((v,i)=>
      {
      return <li key={i}  style={{marginTop:'7px', fontSize:'18px',listStyleType:'circle'}} >
      {edit?<input value={v} style={{width:'100px'}} type='text' onChange={(e)=>this.update_func(e,i)} maxLength='12'/>:v}
      &nbsp;
      {edit?<button type="button" className="btn btn-warning" onClick={this.updated} style={{height:'32px',fontSize:'12px'}}>Update</button>:
      <button type="button" className="btn btn-info" onClick={this.edit_todo} style={{height:'32px',fontSize:'12px'}}>Edit</button>}
      &nbsp;
      <button type="button" className="btn btn-success" onClick={()=>this.delete_todo(i)} style={{height:'32px',fontSize:'12px'}}>Delete</button>
      <br/>
      <br/>
      </li>
      })}
    </ul>
    </div>
    </div>
  )
  }
}

export default App;
