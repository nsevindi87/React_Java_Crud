import { Table,TableContainer, Paper, TableBody, TableCell, TableHead, TableRow, Typography, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { Container } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

const Dashboard = () => {

  const [users,setUsers]=useState([])
 
  const navigate = useNavigate()

  const handlePostUser = ()=>{
    navigate("/user")
  }

  const handleDelete=async (userId)=>{
    try {
      const response = await fetch(`http://localhost:8080/api/user/${userId}`,{
        method:"DELETE"
      })
      if(response.ok){
        fetchUsers()
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleUpdate= (userId)=>{
    navigate(`/user/${userId}`)
  }

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
          <Typography variant='h4' align='center' gutterBottom>
            Users
          </Typography>
          <Button
          variant="contained"
          color='primary'
          onClick={handlePostUser}
          style={{marginBottom:5}}
          fullWidth>
            Post User
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user)=>(
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>
                    <IconButton 
                      color="secondary"
                      onClick={()=>handleUpdate(user.id)}
                      >
                        
                        <EditIcon></EditIcon>                    </IconButton>
                    <IconButton 
                      color="secondary"
                      onClick={()=>handleDelete(user.id)}
                      >
                        
                      <DeleteIcon></DeleteIcon>
                    </IconButton>
                  </TableCell>
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