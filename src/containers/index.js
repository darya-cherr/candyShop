import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../pages/auth_page/auth_page'
import Signup from '../pages/sign_up/sign_up' 
const SignInOutContainer=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:966,margin:"40px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      
      <div
      
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        
        {value === index && (
          <Box>
            <Typography >{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          align ='right'
        >
          
          <Tab label="Sign In" />
         
          <Tab label="Sign Up" />
        </Tabs>
       <div align='left'>
               <img src = "https://i.pinimg.com/564x/57/1a/b7/571ab72772aaa93ef250baa1f6b0a143.jpg"/>
               </div>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
      </Paper>
      
    )
}

export default SignInOutContainer;