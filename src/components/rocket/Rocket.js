const Rocket = ({rocket}) => {

    return(
        <div>
          <h3>{rocket.flight_number} ----- {rocket.mission_name}</h3>
            <h4>{rocket.launch_year}</h4>
            <img src={rocket.links.mission_patch_small} alt={rocket.mission_name}/>
        </div>
    );
}

export {Rocket};