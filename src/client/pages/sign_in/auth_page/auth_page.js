import React, {useState} from 'react';
import {Grid, Paper,  Button, Typography,Link} from '@material-ui/core'
import {login} from "../../../../actions/user";
import Input from "../../input/Input";
import {useDispatch} from "react-redux";
import Signup from "../sign_up/sign_up";
const Login =({handleChange})=>{
    const paperStyle={padding :20,height: 664,width:340, margin:"0 auto"}

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Input value = {email}  setValue={setEmail} type="text"  placeholder='Enter email' fullWidth required/>
                <Input value = {password}  setValue={setPassword}  placeholder='Enter password' type='password' fullWidth required/>

                <Button type='submit' color='primary' variant="contained" style={btnstyle}   onClick={() => dispatch(login(email, password))}>Sign in</Button>

                <Typography > Do you have an account ?
                    <Link href="#" onClick={()=>Signup} >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>

        </Grid>

    )
}

export default Login