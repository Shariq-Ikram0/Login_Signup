import React, { useState } from 'react'
import './App.css'
import Login from './Login/Login'
import Singup from './Singup/Singup'
import styles from './Login/Login.module.css'

const App = () => {
  let [showlogin , switchPage] = useState(true)

  const loginPage = ()=>{
    switchPage(true)
  }
  const singupPage = ()=>{
    switchPage(false)
  }


 return (
    <>
    {
      showlogin ?
      <Login loo={<a  onClick={singupPage} href="#" className={styles.log}>SignUp</a>}/>
       :
      <Singup poo={<a onClick={loginPage} href="#" className={styles.log}>LogIn</a>}/>
    }
  
    </>
  )
}

export default App
