import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {
    const paperStyle = { padding:20,  width:450, margin:"-712px -200px -600px 475px",height:710}
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign up</h2>
                    <Typography variant='caption' gutterBottom>For registration it is necessary to fill in all the fields</Typography>
                </Grid>
                <form align ='center'>
                    <TextField fullWidth label='Name' placeholder="Enter name" />
                    <TextField fullWidth label='Email' placeholder="Enter email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone number' placeholder="Enter phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter password"/>
                    <TextField fullWidth label='Confirm password' placeholder="Confirm password"/>
                    <br />
                    <br />
                    <FormControlLabel  align ='left'

                        control={<Checkbox name="checkedA" />}

                        label="I accept the terms of the user agreement."
                    /><br /><br />
                    <Button  type='submit' variant='contained' color='primary' >Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;