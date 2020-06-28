import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './SignIn.css'
import Error from '../Error'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 255')
        .required('required'),
    password: Yup.string()
        .min(6, 'Must be more than 6 letters')
        .required('required'),
    firstname: Yup.string()
        .required('required'),
    lastname: Yup.string()
        .required('required')
})

const SignIN = () => {
    const [rot, setRotate] = useState(false)
    return (
        <div
            className={rot ? ['flip-card-inner', 'rot'].join(' ') : "flip-card-inner"}>
            <div className="flip-card-front">
                <div class="signupSection">
                    <div class="info">
                        <h2 className="h2">Stand by for rational and biometric scan</h2>

                        <p onClick={() => setRotate(!rot)} rot={rot} class="sign">  Have an account? {rot ? 'SignUp' : "SignIn"} </p>

                        <img className='scan' src="https://i.pinimg.com/originals/12/e8/a6/12e8a6a547e317524121f7a5d6084036.gif" />

                    </div>


                    <Formik
                        initialValues={{ email: '', password: '',  firstname: '', lastname: ''}}
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
                                    <h2 className="h2">{rot ? 'SignIn' : "SignUp"} </h2>
                                    <div className="container">

                                        <label htmlFor="firstanme"></label>
                                        <input
                                            id="text"
                                            type="text"
                                            placeholder="Enter first name"
                                            name="firstname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstname}
                                            className={touched.firstname && errors.firstname ? 'has-error' : null} />
                                        <Error touched={touched.firstname} message={errors.firstname} />

                                        <label htmlFor="lasttanme"></label>
                                        <input
                                            id="text"
                                            type="text"
                                            placeholder="Enter last name"
                                            name="lastname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastname}
                                            className={touched.lastname && errors.lastname ? 'has-error' : null} />
                                        <Error touched={touched.lastname} message={errors.lastname} />

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

                                        <button type="submit"> SignUp </button>
                                    </div>
                                </form>
                            )}

                    </Formik>

                </div>

            </div>
        </div>
    );
}

export default SignIN;
