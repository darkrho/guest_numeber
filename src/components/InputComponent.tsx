type inputProps= {num:number, handle:object}
const InputComponent = ({num, handle}:inputProps) => {

    return (
        <div>
            <input
            type="number" 
            min={0}
            max={9}
            onChange={handle}
            className={`${num}`} 
            />
        
        </div>
        
    )
}

export default InputComponent