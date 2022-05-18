import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import axios from 'axios'

const AddTodo = () => {
    const [todo, setTodo] = useState({})

    const handleChange = (event) =>{
        const {name,value} = event.target
        setTodo({...todo,id: Math.random(),[name]:value})
    } 

    const handleSubmit = () => {
        axios.post('http://localhost:8080/add-todo', todo)
        .then(response => console.log(response.data))
    }
    
    return(
        <>
            <Grid container spacing={2}>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="EmpName" 
                        label="Emp Name" 
                        variant="filled"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="Mobile" 
                        label="Mobile" 
                        variant="filled" 
                        onChange={handleChange}                                
                    />
                </Grid>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="Email" 
                        label="Email" 
                        variant="filled"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="Password" 
                        label="Password" 
                        variant="filled"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={29} >
                    <Button 
                        onClick = {handleSubmit}
                        variant="contained"
                    >Add Emp
                    </Button>
                </Grid>
            </Grid>
        
        </>
    )
}

export default EmpTodo