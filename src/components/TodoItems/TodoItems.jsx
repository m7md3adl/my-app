import React from "react";
import './TodoItems.css'
const TodoItems=(props)=>{
    const {items , deleteItems} =props;
    const listitem=items.map(item =>{
        return(
            <div key={item.id}>
               <span>{item.name}</span>
               <span>{item.age}</span>
               <span onClick={()=>deleteItems(item.id)}>&times;</span>
            </div>
        )
    })
    return(
        <div className="ListItems">
            <div>
            <span>Name </span>
            <span>Age </span>
            <span>Action </span>
            </div>
               {listitem}
        </div>
    )
}
 export default TodoItems;