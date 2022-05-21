import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid, Paper,  TextField, Button, Typography,Link} from '@material-ui/core'
import {registration} from "../../../actions/user";
const Login =({handleChange})=>{
    const paperStyle={padding :20,height: 664,width:340, margin:"0 auto"}

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <TextField value = {email} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
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