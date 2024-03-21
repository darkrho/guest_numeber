type itemProps = {item:{num:number, representation:string}}
const NumContainer = ({item}:itemProps) => {

    return (
        <div className={`num_${item.num}`}>
            {item.representation}
        </div>
    )
}

export default NumContainer