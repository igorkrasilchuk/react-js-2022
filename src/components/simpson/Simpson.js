export  default function Simpson(props) {
    let {simpson} = props;
    return(
        <div>
            <h2>{simpson.name}-----{simpson.age}</h2>
            <h3>{simpson.surname}</h3>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.photo}/>
            <hr/>
        </div>
    );
}