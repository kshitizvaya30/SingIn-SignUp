import React from 'react'
import background from '../../assets/backgroundImg.jpg';
import './LoginPage.scss';
import SignIn from '../../components/SignIn/SignIn'

function LoginPage() { 
  return (
    <div className='bgContainer'>
      <div className="backgroundImage">
        <img src={background} alt="background"  className='imgContainer'/>
         <SignIn/>
      </div>
    </div>
  )
}


export default LoginPage