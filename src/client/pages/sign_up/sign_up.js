import React from 'react'
import { Grid, Paper,TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {
        const paperStyle = { padding: 20, width: 340,height: 664, margin: "20 auto" }
        const marginTop = { marginTop: 5 }
        return (
            <Grid>
                <Paper style={paperStyle}>
                    <form>
                        <TextField fullWidth label='Name' placeholder="Enter your name" />
                        <TextField fullWidth label='Email' placeholder="Enter your email" />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                        <TextField fullWidth label='Password' placeholder="Enter your password"/>
                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."
                        />
                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </form>
                </Paper>
            </Grid>
        )
    }

    export default Signup;