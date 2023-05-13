import React from 'react'
import background from '../../assets/backgroundImg.jpg';
import './LoginPage.scss';
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp';

function LoginPage() {
  return (
    <div className='bgContainer'>
      <div className="backgroundImage">
        <img src={background} alt="background"  className='imgContainer'/>
        {/* <SignIn /> */}
        <SignUp />
      </div>
    </div>
  )
}


export default LoginPage