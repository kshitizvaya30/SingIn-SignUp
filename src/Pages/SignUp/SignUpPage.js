import React from 'react'
import background from '../../assets/backgroundImg.jpg';
import './SignUpPage.scss';
import SignUp from '../../components/SignUp/SignUp'

function SignUpPage() { 
  return (
    <div className='bgContainer'>
      <div className="backgroundImage">
        <img src={background} alt="background"  className='imgContainer'/>
         <SignUp/>
      </div>
    </div>
  )
}


export default SignUpPage