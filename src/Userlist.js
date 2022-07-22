import React from 'react'
import User from './User';

function Userlist({users})
{
    return(
        <div className="container">
        {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

export default Userlist;