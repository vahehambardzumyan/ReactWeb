import React, { useState } from 'react';
import './Auth.css'
import { red, blue } from 'color-name';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Error from './Reg/Error'
import SignIN from './Reg/SignIn/SignIn';
import SignUp from './Reg/SignUp/SignUp';



const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 255')
        .required('required'),
    password: Yup.string()
        .min(6, 'Must be more than 6 letters')
        .required('required')
})


const Auth = () => {

    const [rot, setRotate] = useState(false)
    return (
        <div className='Auth'>

  <button
      onClick={() => setRotate(!rot)} rot={rot} 
      style={{width: '400px', height: '60px'}}>
      
       <p > {rot ?  "Have an account? SignIn": " Don't have an account? Register Here"}  </p>
        </button>
      <br />
   
            <div
                className={"flip-card"}>



                <div
                    className={rot ? ['flip-card-inner', 'rot'].join(' ') : "flip-card-inner"}>
                    <div className="flip-card-front">
                      <SignUp />

                    </div>
                    <div className="flip-card-back">
                        <SignIN />
                    </div>
                </div>
            </div>

 



        </div>
    );
}

export default Auth;




