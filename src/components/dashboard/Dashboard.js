import { Container } from '@mui/system'
import React, { useEffect,useState } from 'react'

const Dashboard = () => {

  const [users,setUsers]=useState([])

  const fetchUsers = async ()=>{
    try {
      const response = await fetch("http://localhost:8080/api/users")
      const result = await response.json();
      setUsers(result)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <>
      <Container className="mt-4">
        
      </Container>

    </>
  )
}

export default Dashboard