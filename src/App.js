
import { Component } from 'react';
import React  from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItems/AddItem';
class App extends Component { 
  state={
    items:[
            {id:1,name:"mohamed",age:"22"},
            {id:1,name:"ahmed",age:"23"},
            {id:1,name:"omar",age:"24"}
    ]
  }
   deleteItems=(id)=>{
           console.log(id);
  }
render(){
 return(
           <div>
             todoListApp
             <TodoItems items={this.state.items} deleteItems={this.deleteItems} />
             <AddItems/>
           </div>
 )
}
} 


export default App;




