import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import axios from 'axios';
import './AddEdit.css';

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state,setState] = useState(initialState);
  const {name, email, contact} = initialState;
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div style={{marginTop: "100px"}}>
      <form 
        style={{
          margin: "auto", 
          padding: "15px",
          maxwidth: "400px", 
          alignContent: "center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor='name'>Name</label>
          <input 
            type='text' 
            id="name" 
            name="name" 
            placeholder='Enter Name ...' 
            onChange={handleInputChange} 
            value={name}/>
            <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id="email" 
            name="email" 
            placeholder='Enter Email ...' 
            onChange={handleInputChange} 
            value={email}/>
            <label htmlFor='contact'>Contact</label>
          <input 
            type='number' 
            id="contact" 
            name="contact" 
            placeholder='Enter Contact No.  ...' 
            onChange={handleInputChange} 
            value={contact}/>
      </form>    
    </div>
  )
}

export default AddEdit