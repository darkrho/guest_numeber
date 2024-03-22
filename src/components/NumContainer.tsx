type itemProps = { num:number, repre:string }
const NumContainer = ({num, repre}:itemProps) => {

    return (
        <div className={`num_${num}`}>
            {repre}
        </div>
    )
}

export default NumContainer