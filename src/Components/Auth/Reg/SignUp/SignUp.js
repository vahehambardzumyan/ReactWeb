import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './SignUp.css'
import Error from '../Error'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 255')
        .required('required'),
    password: Yup.string()
        .min(6, 'Must be more than 6 letters')
        .required('required')
})

const SignUp = () => {
    const [rot, setRotate] = useState(false)
    return (
        <div
            className={rot ? ['flip-card-inner', 'rot'].join(' ') : "flip-card-inner"}>
            <div className="flip-card-front">
                <div className="signupSection">
                    <div className="info">
                        <h2 className="h2">Stand by for rational and biometric scan</h2>

                        <p  className="sign">  Don't have an account?  </p>

                        <img className='scan' alt="G"  src="https://i.pinimg.com/originals/12/e8/a6/12e8a6a547e317524121f7a5d6084036.gif" />

                    </div>


                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true)

                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2))
                                resetForm()
                                setSubmitting(false)
                            }, 500)
                        }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit }) => (
                                <form
                                    className="modal-content"
                                    onSubmit={handleSubmit}>
                                    <h2  className="h2">{rot ? 'SignUp' : "SignIn"} </h2>
                                    <div className="container">

 

                                        <label htmlFor="email"></label>
                                        <input
                                            id="text"
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? 'has-error' : null} />
                                        <Error touched={touched.email} message={errors.email} />
                                        <label htmlFor="password"></label>
                                        <input
                                            type="password"
                                            placeholder="Enter Password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            className={touched.password && errors.password ? 'has-error' : null} />
                                        <Error touched={touched.password} message={errors.password} />

                                        <button type="submit"> SignIn </button>
                                    </div>
                                </form>
                            )}

                    </Formik>

                </div>

            </div>
        </div>
    );
}

export default SignUp;