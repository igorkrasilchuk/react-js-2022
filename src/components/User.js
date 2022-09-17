export  default function User(props) {
    let {users} = props
    return(
        <div>
            <h3>{users.id}---{users.name}</h3>
            <h4>{users.username}</h4>
            <p>{users.email}</p>
        </div>
    );
}