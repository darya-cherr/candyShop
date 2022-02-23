import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {
    const paperStyle = { padding:20,  width:450, margin:"-715px -200px -600px 475px",height:670}
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                    <h2 style={headerStyle}>Регистрация</h2>
                    <Typography variant='caption' gutterBottom>Пожалуйста, заполните все поля для регистрации</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Имя' placeholder="Введите имя" />
                    <TextField fullWidth label='Email' placeholder="Введите email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Пол</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Женский" />
                            <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Номер телефона' placeholder="Введите номер телефона" />
                    <TextField fullWidth label='Пароль' placeholder="Введите пароль"/>
                    <TextField fullWidth label='Повторите пароль' placeholder="Повторите пароль"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Я принимаю условия пользовательского соглашения."
                    />
                    <Button type='submit' variant='contained' color='primary'>Регистрация</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;