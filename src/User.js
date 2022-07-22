import React from 'react'

function User({user})
{
    const {first_name, last_name, username, email, avatar, likes_cats, ip_address} = user;
    return(
        <div className="card">
            <h3>{first_name} {last_name}</h3>
            <h4>{username}</h4>
            <img src={avatar} alt={avatar}/>
            <h4>{email} : {ip_address}</h4>
            <p>Likes cats: {String(likes_cats)}</p>
        </div>
    )
}
export default User;