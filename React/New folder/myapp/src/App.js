import React from 'react'
import {useState} from 'react'
export default function App() {
const[tasks,setTask]=useState([
    {id:1,name:"This is task 1",complete:true},
    {id:2,name:"This is task 2",complete:false},
    {id:3,name:"This is task 3",complete:true},
])
function taskdelete(id)
{
setTask(tasks.filter((t)=>t.id!=id))
}
return(
<div className="App">
    <h1>Task-List</h1>
    <ul>
{tasks.map((task)=><li>{task.id}--------{task.name}

<button onClick={()=>taskdelete(task.id)}>Delete</button>

</li>    )}

    </ul>
</div>


)


}