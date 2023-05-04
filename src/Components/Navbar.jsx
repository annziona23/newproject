import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} marginLeft={30}>
            Employee App
          </Typography>
          <Button variant='contained'><Link to ={"/"}>Home</Link></Button>
          <Button variant='contained' ><Link to ={"/add"}>Add Employee</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
