import {users} from "./data";
import User from "./User";

export  default function Users() {

    return(
        <div>{
            users.map((user, index) => <User key={index} user={user}/> )
        }
        </div>
    );
}