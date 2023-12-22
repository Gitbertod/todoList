const DeleteTask = ({ task, taskList, setTaskList }) => {

    const arrayActualizado = taskList.filter((e) => {
        return e.tarea !== task
    })
    
    const handleTaskList = () =>{
        confirm('Seguro que desea borrar esta actividad?')
        setTaskList(arrayActualizado)
    } 

    return (
        <button onClick={() => handleTaskList()}>Delete</button>
    )
}

export default DeleteTask;