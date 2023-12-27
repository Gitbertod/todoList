import style from './task.module.css'
import DeleteTask from '../delete-task/DeleteTask';
import CheckTask from '../check-task/CheckTask';
import { useState } from 'react';

const Task = ({ task, check,setCheck, taskList, setTaskList, completeTask,done }) => {

    return (
        <div className={style.task}>

            <CheckTask
                completeTask={completeTask}
                check={check}
                setCheck = {setCheck}
                done= {done = true}
            />
            <p>{task}</p>
            <DeleteTask
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
            />
        </div>
    )
}

export default Task;
