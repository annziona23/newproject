import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./style.css";
import axios from 'axios';

const Home = () => {
    var[value,setValue]= useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            console.log(response.data.users);
            setValue(value=response.data.users)
        })
    })
  return (
    
    <div>
        <center>
      <Typography variant='h4'>Welcome to Home page</Typography>
      </center>
      <Table >
        <TableHead className='t1' >
            <TableRow >
                <TableCell >First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell >Age</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
{value.map((data,ind)=>{
    return<TableRow>
        <TableCell>{data.firstName}</TableCell>
        <TableCell>{data.lastName}</TableCell>
        <TableCell>{data.age}</TableCell>
    </TableRow>
})}
        </TableBody>
      </Table>
    
    
    </div>

  )
}

export default Home
