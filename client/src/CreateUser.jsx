import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';  

const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !age || !mobile) {
      alert('Please fill out all fields.');
      return;
    }
    // axios.post('http://localhost:3001/createUser', { name, email, age, mobile })
    axios.post(`${process.env.REACT_APP_API_URL}/createUser`, { name, email, age, mobile })
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='update-container'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <input type="text" placeholder='Enter Name' className='form-control mb-2' onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Enter Email' className='form-control mb-2' onChange={(e) => setEmail(e.target.value)} />
          <input type="number" placeholder='Enter Age' className='form-control mb-2' onChange={(e) => setAge(e.target.value)} />
          <input type="number" placeholder='Enter Mobile No.' className='form-control mb-2' onChange={(e) => setMobile(e.target.value)} />
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
