import React from 'react'
import style from './form.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
}

const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match")
})

const Form = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();

        }
    })

    console.log(errors);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.inputGroup}>
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" name="name" id="name" placeholder='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && touched.name ? (
                        <p className={style.formError}>{errors.name}</p>
                    ) : null}
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="email">email:</label><br />
                    <input type="email" name='email' id='email' placeholder='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email ? (
                        <p className={style.formError}>{errors.email}</p>
                    ) : null}
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">password:</label><br />
                    <input type="password" name='password' id='password' placeholder='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password ? (
                        <p className={style.formError}>{errors.password}</p>
                    ) : null}
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="confirm_password">confirm password:</label><br />
                    <input type="password" name='confirm_password' id='confirm_password' placeholder='conform password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                    {errors.confirm_password && touched.confirm_password ? (
                        <p className={style.formError}>{errors.confirm_password}</p>
                    ) : null}
                </div>

                <div className={style.inputGroup}>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form