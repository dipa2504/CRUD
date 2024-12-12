import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {

  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(process.env.REACT_APP_API_URL);
  //       const data = await response.json();
  //       setItems(data);
  //     } catch (error) {
  //       console.error("Error fetching items:", error);
  //     }
  //   };
  //   fetchItems();
  // }, []);

   useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
