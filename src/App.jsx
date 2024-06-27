
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Login } from './Components/Login'

function App() {

  // const [data , setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://swapi.dev/api/people/');
  //       console.log('Fetched data:', response.data);  // Log data to the console
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);  // Log error to the console
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // } 
  // , []);
 

  return (
    <>
      <Login />
    </>
  )
}

export default App
