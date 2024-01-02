const CheckTask = ({taskList,setTaskList}) => {

    const handleComplete = () =>{
        setTaskList(tareaCompletada)
    }
    return (
        <div>
            <input
                type='checkbox'
                onChange={()=>handleComplete}
            />

        </div>

    )
}

export default CheckTask