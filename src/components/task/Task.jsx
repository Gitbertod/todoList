import style from './task.module.css'

const Task = ({task}) =>{
    return (
        <div className={style.task}>
            <p>{task}</p>
            <button>Eliminar</button>
        </div>
    )
}

export default Task;
