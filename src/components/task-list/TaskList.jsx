import { useState } from "react"
import Task from "../task/Task"
import DeleteTask from "../delete-task/DeleteTask";

const TaskList = () => {
    const [taskInput, setTaskInput] = useState('');
    const [send, setSend] = useState(false)
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if(taskInput != ""){
            
            const tarea = {
                id: Date.now(),
                tarea: taskInput,
                done: false
            }
            setTaskList([...taskList, tarea])
            setTask(tarea.tarea)
            setSend(true)
            setTaskInput('')
        }

        return
    }

    const DeleteTask = () =>{
        // taskList.map((e)=> {
        //     if(e.id != ){

        //     }
        // })
        // taskList.filter((e) => e != )

    } 

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={'Add a task'}
                    onChange={(e) => setTaskInput(e.target.value)}
                    value={taskInput}
                />
                <input type="submit" value={'Add task'} />
            
                {taskList.map((e) => {
                    return (
                        <Task
                            key={e.id}
                            task={e.tarea}
                            taskList = {taskList}
                            setTaskList = {setTaskList}
                        />
                    )
                })}
            </form>
        </div>
    )
}

export default TaskList