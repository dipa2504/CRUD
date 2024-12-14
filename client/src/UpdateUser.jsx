import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateUser.css'; 
// import { url } from './assets/assets';

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');

  // Fetch user data by ID
  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
    // axios.get(`${url}/api/getUser/${id}`)
      .then(result => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
        setMobile(result.data.mobile);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Handle form submission to update user
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !email || !age || !mobile) {
      alert('Please fill out all fields.');
      return;
    }
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age, mobile })
    // axios.put(`${url}/api/updateUser/${id}`, { name, email, age, mobile })
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='update-container'>
      <div className='form-container'>
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <input
            type="text"
            className='form-control mb-2'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className='form-control mb-2'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            className='form-control mb-2'
            placeholder='Enter Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="number"
            className='form-control mb-2'
            placeholder='Enter Mobile No.'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
