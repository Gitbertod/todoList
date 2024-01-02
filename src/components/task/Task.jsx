import style from './task.module.css'
import DeleteTask from '../delete-task/DeleteTask';
import { useState } from 'react';

const Task = ({ task, taskList, setTaskList }) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleOnChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>

            <div className={style.task}>


                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleOnChange}
                />
                {isChecked ? <del><p>{task}</p></del>
                    : <p>{task}</p>
                }

                <DeleteTask
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>

        </>
    )
}

export default Task;
