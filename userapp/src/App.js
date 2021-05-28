import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Loader from './components/Loader'
import Axios from 'axios';

function App() {
  // constant variables
  const [isClicked, setIsClicked] = useState(0); //shareable state with Navbar
  const [data, setData] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

  // api call
  const getUsers = () => {
    //showing loader on beginning of api call
    setIsLoader(true)

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("api data recieved")
        setData(response.data.data);

        //hiding loader at the end of api call
        setIsLoader(false)
      }
    )
  }
  
  // btn state lifing in navbar
  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked])

  return (
    <div className="App">
      <Navbar onSetIsClicked={setIsClicked}/>
      <div className='row'>
        {/* mapping through the response of the api */}
        {data&&data.map((val) => {
          return <UserCard first_name={val.first_name} last_name={val.last_name} email={val.email} avatar={val.avatar}/>
        })}
      </div>
      <Loader show={isLoader}/>
    </div>
  );
}

export default App;
