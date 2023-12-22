import { useState } from "react"
import Task from "./Task"

const TaskList = () => {
    const [taskInput, setTaskInput] = useState('');
    const [send, setSend] = useState(false)
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const tarea = {
            id: Date.now(),
            tarea: taskInput,
            done: false
        }

        setTaskList([...taskList, tarea])
        setTask(tarea.tarea)
        setSend(true)
        setTaskInput('')

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
                            task={e.tarea}
                        />

                    )
                })}
            </form>
        </div>
    )
}

export default TaskList