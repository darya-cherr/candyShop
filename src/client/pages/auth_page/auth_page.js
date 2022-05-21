import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid, Paper,  TextField, Button, Typography,Link} from '@material-ui/core'
import {login, registration} from "../../../actions/user";
import Input from "../input/Input";
import {useDispatch} from "react-redux";
const Login =({handleChange})=>{
    const paperStyle={padding :20,height: 664,width:340, margin:"0 auto"}

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Input value = {email}  setValue={setEmail} type="text"  placeholder='Enter username' fullWidth required/>
                <Input label='Password'   setValue={setPassword}  placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle}   onClick={() => dispatch(login(email, password))}>Sign in</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link href="#" onClick={()=>registration(email,password)} >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>

        </Grid>

    )
}

export default Login