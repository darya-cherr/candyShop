import React from 'react'

import SignInOutContainer from "./index";
const Contain =()=>{
    return(
        <div  className='m-5'
              sx={{
                  width: 1280,
                  height: 300,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                  },
              }}>
            <img  src = "https://i.pinimg.com/564x/57/1a/b7/571ab72772aaa93ef250baa1f6b0a143.jpg" hspace={'270px'}/>

            <SignInOutContainer />
</div>
    )
}

export default Contain