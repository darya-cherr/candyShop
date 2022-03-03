import React from 'react'

import Box from '@material-ui/core/Box';
import SignInOutContainer from "./index";
const Contain =()=>{
    return(
        <Box  className='m-5' align={'center'}
              sx={{
                  width: 1280,
                  height: 300,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                  },
              }}>
            <img align={'left'} src = "https://i.pinimg.com/564x/57/1a/b7/571ab72772aaa93ef250baa1f6b0a143.jpg"/>

            <SignInOutContainer />



</Box>
    )
}

export default Contain