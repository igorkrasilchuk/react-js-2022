const User = ({user, showUser}) => {

    return(
        <div>
            <h3>{user.id} --- {user.name}</h3>
            <button onClick={() => showUser(user)}>Details</button>
        </div>
    );
}

export {User};