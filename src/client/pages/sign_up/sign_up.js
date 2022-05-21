import React, {useState} from 'react'
import {Grid, Paper, Button} from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {registration} from "../../../actions/user";
import Input from "../input/Input";

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [number, setNumber] = useState("")


    const paperStyle = { padding: 20, width: 340,height: 664, margin: "20 auto" }
        const marginTop = { marginTop: 5 }
        return (
            <Grid>
                <Paper style={paperStyle}>
                    <form>
                        <Input value = {name} setValue={setName}   type="text"  fullWidth placeholder="Enter your name" required />
                        <Input  value = {email} setValue={setEmail} type="text"  fullWidth  placeholder="Enter your email" required/>
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <Input value = {number} setValue={setNumber} type="text"  fullWidth required placeholder="Enter your phone number" />
                        <Input value = {password}  setValue={setPassword}  fullWidth required label='Password' type='password' placeholder="Enter your password"/>
                        <Input fullWidth label='Confirm Password' type='password' placeholder="Confirm your password"/>
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."
                        />
                        <Button type='submit' variant='contained' color='primary' onClick={()=>registration(name,
                            email,
                            password,
                            gender,
                            number)} >Sign up</Button>
                    </form>
                </Paper>
            </Grid>
        )
    }

    export default Signup;