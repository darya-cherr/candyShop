import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid, Paper, Avatar, TextField, Button, Typography,Link} from '@material-ui/core'
const Login =()=>{
    const btnstyle={margin:'8px 0'}
    const paperStyle = { padding:20, height :'70vh', width:450, margin:"40px auto"}
    
    const style = { height :'70vh', width:450, margin:"40px"}
    return(
        <Grid>
            <Paper elevation = {10} style = {paperStyle}>
               <Grid align = 'center'>

               
               <Avatar>H</Avatar>
                <h2>Sign in</h2></Grid>
                <TextField label="Логин" placeholder ="Введите логин" fullWidth required />
                <TextField label="Пароль" placeholder ="Введите пароль" type = 'password' fullWidth required />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Запомнить"
                 />  
                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Забыли пароль?
                </Link>
                </Typography>
                     <Link href="#" >
                        Регистрация
                </Link>
            </Paper>
        </Grid>
        
    )
}

export default Login