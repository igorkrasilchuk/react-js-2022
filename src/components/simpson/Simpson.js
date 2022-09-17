export default function Simpson(props){
    let {itemName, pic} = props
    let classNameItem = 'simpson'
    return(
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic} alt={pic}/>
        </div>
    );

}