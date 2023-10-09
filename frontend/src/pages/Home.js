import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import axios from "axios";
import { getUsers } from '../../../Server/controller/users';

const Home = () => {
  const [data, sedata] = useState([]);
  useEffect(()=>{
    getUsers();
  }, [])

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/users")
  }
  return (
    <div>
        <h2>Home</h2>
    </div>
  )
}

export default Home