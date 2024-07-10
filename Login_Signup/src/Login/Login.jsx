import React from 'react'
import styles from './Login.module.css'

const Login = ({loo}) => {

  return (
    <div>
      <div className={styles.log_in}>
        <h3 className={styles.heading}>
          LOGIN 
        </h3>
        <div className={styles.inputs}>
        <input type="text" placeholder='shariqikram0@gmail.com' /><br/>
        <input type="password" placeholder='*********' />
       </div>
       <label className={styles.checkbox_label}>
                <input type="checkbox"/>
                Keep me signed in
        </label>

        <button className={styles.btn}>LOG IN</button>
        <br/>
        <h5 className={styles.text}>Don't have an account?&nbsp; {loo} </h5>
</div>
    </div>
  )
}

export default Login


