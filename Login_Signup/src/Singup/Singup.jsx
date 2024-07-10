import React from 'react'
import styles from './Singup.module.css'


const Singup = ({poo}) => {

  return (
    <div>
    <div className={styles.sing_up}>
      <h3 className={styles.heading}>
          SIGN UP
        </h3>
        <div className={styles.inputs}>
        <input type="text" placeholder='CreateEmail@gmai.com' /><br/>
        <input type="password" placeholder='Create Password' />
        <input type="password" placeholder='Confirm Password' />
       </div>
        <button className={styles.btn}>SIGN IN</button>
        <br/>
        <h5 className={styles.text}>Already have an account?&nbsp; {poo}</h5>
    </div>
    </div>
  )
}

export default Singup
