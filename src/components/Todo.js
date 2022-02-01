import React, {useState} from "react";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [todo, setTodo] = useState(props.item);
  const remove = () => {
    props.removeTodo(props.id);
  };
  const toggleForm = () => {
    setEditing(!isEditing);
  };
  const handleChange = (event) => {
    setTodo(event.target.value );
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    props.updateData(props.id, todo);
    setEditing(false);
  };
 let result;
 if (isEditing){
   result=(
     <div>
       <form onSubmit={handleUpdate}>
         <input type="text" value={todo} onChange={handleChange}/>
         <button>Save-todo</button>
       </form>
     </div>
   );
  }else{
    result=(
      <div>
       <li>{props.item}</li>
       <div>
        <button onClick={toggleForm}>Edit</button>
        <button onClick={remove}>X</button>
       </div>
      </div>
    );
  
}
 return result;
}
