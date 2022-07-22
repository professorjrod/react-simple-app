import React from 'react'

function Userfilter({filterBy, setFilterBy, likesCats, setLikesCats})
{
    function doFilter(e)
    {
        setFilterBy(e.target.value);
    }
    function doCats(e)
    {
        setLikesCats(e.target.checked)
    }
    return(
        <div className="filter">
            <select placeholder='all' onChange={doFilter} value={filterBy}>
                <option>First Name</option>
                <option>Last Name</option>
                <option>Username</option>
                <option>Email</option>
                <option>Ip Address</option>
            </select>
            <label>Likes cats</label>
            <input type="checkbox" checked={likesCats} onChange={doCats}/>
        </div>
    )
}
export default Userfilter;