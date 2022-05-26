import React, {useState} from 'react'
import {Grid, Paper, Button} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {registration} from "../../../../actions/user";
import Input from "../../input/Input";

const Signup = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")


    const paperStyle = { padding: 20, width: 340,height: 664, margin: "20 auto" }
        return (
            <Grid>
                <Paper style={paperStyle}>
                    <form name="myForm">
                        <Input value = {name} setValue={setName}   type="text"  fullWidth placeholder="Enter your name" required />
                        <Input  value = {email} setValue={setEmail} type="text"  fullWidth  placeholder="Enter your email" required/>

                        <Input value = {number} setValue={setNumber} type="text"  fullWidth required placeholder="Enter your phone number" />
                        <Input value = {password}  setValue={setPassword}  fullWidth required label='Password' type='password' placeholder="Enter your password"/>

                        {<Button align="ctnter" id="btn" /*disabled="disabled"*/ type='submit' variant='contained' color='primary' onClick={()=>registration(name,
                            email,
                            password,
                            number)} >Sign up</Button>}
                        </form>
                </Paper>
            </Grid>
        )
    }

    export default Signup;