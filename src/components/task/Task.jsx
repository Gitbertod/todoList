import style from './task.module.css'
import DeleteTask from '../delete-task/DeleteTask';

const Task = ({ task, taskList,setTaskList }) => {
    return (
        <div className={style.task}>
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
