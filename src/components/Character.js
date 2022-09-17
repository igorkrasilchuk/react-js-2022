export  default function Character(props) {
    let {character} = props
    return(
        <div>
           <h2>{character.id} --- {character.name} --{character.status}</h2>
           <h3>{character.species} --- {character.gender}</h3>
            <img src={character.image} alt="{character.image}"/>
        </div>
    );
}