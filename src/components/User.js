export  default function User(props) {
    let {user} = props
    return(
        <div>
            <h3>{user.id}---{user.name}</h3>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
        </div>
    );
}