import { Table,TableContainer, Paper, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { color, Container } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [users,setUsers]=useState([])
 
  const navigate = useNavigate()

  const handlePostUser = ()=>{
    navigate("/user")
  }
  const fetchUsers = async ()=>{
    try {
      const response = await fetch("http://localhost:8080/api/users")
      const result = await response.json();
      setUsers(result)
      console.log(users)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchUsers()
    console.log(users)
  },[])

  return (
    <>
      <Container className="mt-4">
        <Button
          variant="contained"
          color='primary'
          onClick={handlePostUser}
          style={{marginBottom:5}}>
            Post User
          </Button>
          <Typography variant='h4' align='center' gutterBottom>
            Users
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user)=>(
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.address}</TableCell>
                </TableRow>
                ))}
              </TableBody>
              
            </Table>
          </TableContainer>

      </Container>

    </>
  )
}

export default Dashboard