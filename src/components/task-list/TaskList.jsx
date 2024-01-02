import { useState,useEffect } from "react"
import Task from "../task/Task"
import DeleteTask from "../delete-task/DeleteTask";

const TaskList = () => {
    const [taskInput, setTaskInput] = useState('');
    const [send, setSend] = useState(false)
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('task'))?? [])
    const [task, setTask] = useState('')

    useEffect(()=>{
        const obtenerLS = () =>{
            const listaLS = localStorage.getItem('task')
            console.log(listaLS)

        }


        obtenerLS()
    },[])

    useEffect(()=>{
        localStorage.setItem('task',JSON.stringify(taskList))
    },[taskList])



    const handleSubmit = (e) => {
        e.preventDefault()

        if (taskInput != "") {

            const tarea = {
                id: Date.now(),
                tarea: taskInput
            }
            setTaskList([...taskList, tarea])
            setTask(tarea.tarea)
            setSend(true)
            setTaskInput('')

        }
        return
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
                            setTask={setTask}
                            task={e.tarea}
                            taskList={taskList}
                            setTaskList={setTaskList}
                        />
                    )
                })}
            </form>
        </div>
    )
}

export default TaskList