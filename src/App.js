import React, {useState} from 'react'
import './index.css'
import Header from './Header'
import data from './data/data.js';
import Userfilter from './Userfilter';
import Userlist from './Userlist';

function App() {
  const [filterBy, setFilterBy] = useState("All");
  const [likesCats, setLikesCats] = useState("All");

  let filteredUsers = data.sort((user1,user2) =>
    {
      switch(filterBy)
      {
        case "First Name":
          return user1.first_name.localeCompare(user2.first_name);
        case "Last Name":
          return user1.last_name.localeCompare(user2.last_name);
        case "Username":
          return  user1.username.localeCompare(user2.username);
        case "Email":
          return user1.email.localeCompare(user2.email);
        case "Ip Address":
          return user1.ip_address.localeCompare(user2.ip_address);
        default:
      }
    })

  const catUsers = filteredUsers.filter(user => (user.likes_cats))
  if(likesCats === true)
  {
    filteredUsers = catUsers;
  }

  return (
    <div className="App">
      <Header/>
      <Userfilter filterBy={filterBy} setFilterBy={setFilterBy} setLikesCats={setLikesCats}/>
      <Userlist users={filteredUsers}/>
    </div>
  );
}

export default App;
