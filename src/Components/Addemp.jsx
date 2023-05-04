import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Addemp = () => {
    const {register,handleSubmit} =useForm();
    const getVal=(val) =>{

        alert('Form submitted');
        axios.post('https://reqres.in/api/users',val).then((response)=>{
            alert(`The data is posted with id ${response.data.id}`)
        })
        
    }
  return (
    <div>
        <center>
            <br/>
      <Typography variant='h4'>Add Employee details</Typography>
      <br/>
      <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField name='empname' {...register('empname')} id="outlined-basic" label="Employee name" variant="outlined" />
      <TextField name='emploc' {...register('emploc')} id="outlined-basic" label="Employee location" variant="outlined" />
      <TextField name='empdesignation' {...register('empdesignation')} id="outlined-basic" label="Employee designation" variant="outlined" />
      <Button onClick={handleSubmit(getVal)} variant='contained'>Submit</Button>
    </Stack>
    </center>
    </div>
  )
}

export default Addemp
