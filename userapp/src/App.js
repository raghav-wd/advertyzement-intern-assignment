import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Axios from 'axios';

function App() {
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);
  const getUsers = () => {
    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log(response.data.data)
        setData(response.data.data);
      }
    )
  }
  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked])
  return (
    <div className="App">
      <Navbar onSetIsClicked={setIsClicked}/>
      <div className='row'>
        {data&&data.map((val) => {
          return <UserCard first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar}/>
        })}
      </div>
    </div>
  );
}
export default App;
