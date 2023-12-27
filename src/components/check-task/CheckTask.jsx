const CheckTask = ({check,setCheck}) => {
    
    
    return (
        <div>
           
            <input
                type='checkbox'
                value={check}
                onChange={()=> handleCheck() }
            />

        </div>

    )
}

export default CheckTask