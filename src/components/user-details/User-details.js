const UserDetails = ({user}) => {

    return(
        <div>
         <h3>{user.username} ---- {user.email}</h3>
          </div>
    );
}

export {UserDetails};