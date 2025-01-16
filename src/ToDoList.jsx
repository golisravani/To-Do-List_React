import React, {useState} from "react";
function ToDoList(){
    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState("");

    function handleInputChange (e) {
                setNewTask(e.target.value);
    }
function handleAddTasks(){
    if(newTask.trim() !== ""){
        setTasks  (t => [...t, newTask]);
        setNewTask("");
    }    
}
function handleDeleteTasks(index){
        const updateTasks = tasks.filter((_ , i) => i !== index);
        setTasks(updateTasks);
}
function handleMoveUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
}
function handleMoveDown(index){
    if(index< tasks.length -1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
        setTasks(updatedTasks);
    }
}
return (
    <div className="container">
<div className="To-do-List">
    <h1>To-Do-List</h1>
    <div className="To-Do-Area">
        <div className="Input-Area">
        <input type="text" placeholder="Enter your task" value={newTask} onChange={handleInputChange}/>
        <button className="add-btn" onClick={handleAddTasks}>ADD </button>
        </div>
        <ol>
            {tasks.map((task , index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button onClick={()=> handleDeleteTasks(index)} className="delete-btn">DELETE</button>
                    <button onClick={()=>handleMoveUp(index)} className="move-up">👆</button>
                    <button onClick={()=> handleMoveDown(index)} className="move-down">👇</button>
                     </li>

            )}
        </ol>
    </div>
</div>
</div>

)
}
export default ToDoList;