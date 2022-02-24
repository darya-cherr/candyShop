import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid, Paper, Avatar, TextField, Button, Typography,Link} from '@material-ui/core'
const Login =()=>{
    const btnstyle={width: 200}
    const paperStyle = { padding:20,  width:450, margin:"-712px -200px -600px 475px",height:710}

    return( 
        <Grid  >
            <Paper  style = {paperStyle}>
               <Grid align = 'center'>
                <h2>Sign in</h2></Grid>
                <form align ='center'>
                <TextField  label="Login" placeholder ="Enter login" fullWidth required />
                <TextField label="Password" placeholder ="Enter password" type = 'password' fullWidth required />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label ="Remember"
                 />
                 <br />
                 <Button  type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Sign in</Button>
                <Typography ><br />
                     <Link href="#" >
                         Forgot password?
                </Link>
                </Typography>
                     <Link href="#"  >
                        Sign up
                </Link>
                    </form>
            </Paper>
        </Grid>
        
    )
}

export default Login