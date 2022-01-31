import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleUser from "./SingleUser"

const UserList = () => {

  const [users, setUsers] = useState([]);
  // https://randomuser.me/api/?result=5

  const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=5')
    setUsers(response.data.results)
  };
  useEffect(() => {
    fetchUsers();



  }, []);

  return (
    <div className="user-list">
      <button  onClick={() => fetchUsers()}>Listeyi Güncelle</button>
      <ul>
        {users?.map((user, id) => (
          <li className="list"><SingleUser key={id} user={user} /> </li>
        ))}


      </ul>



    </div>

  );
};

export default UserList;




