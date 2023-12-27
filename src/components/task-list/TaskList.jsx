import { useState } from "react"
import Task from "../task/Task"
import DeleteTask from "../delete-task/DeleteTask";

const TaskList = () => {
    const [taskInput, setTaskInput] = useState('');
    const [send, setSend] = useState(false)
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')
    const [check,setCheck] = useState(false)


    taskList.map((e)=>e)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (taskInput != "") {

            const tarea = {
                id: Date.now(),
                tarea: taskInput,
                done: true
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
                            done = {e.done}
                            taskList={taskList}
                            setTaskList={setTaskList}
                            check = {check}
                            setCheck = {setCheck}
                        />
                    )
                })}
            </form>
        </div>
    )
}

export default TaskList