import React, { useState } from 'react';
import { LOGIN_ROUTE } from '../constant/formRouter';
import { Link } from 'react-router-dom';
import { validateField, validateForm } from '../utilities/validateForm';
import { registerValidationSchema } from '../constant/validationSchemaConstant';


function Register(props) {
    const [formData, SetFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        const updatedForm = { ...formData, [name]: value };
        SetFormData(updatedForm);
        const error = validateField(name, value, updatedForm, registerValidationSchema);

        setErrors({
            ...errors,
            [name]: error,
            ...(name === "password" && {
                // for change pw
                confirmPassword: validateField(
                    "confirmPassword",
                    updatedForm.confirmPassword,
                    updatedForm,
                    registerValidationSchema
                )
            })
        });
    };



    const handleForm = (e) => {
        e.preventDefault();

        const newErrors = validateForm(formData, registerValidationSchema);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        SetFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
        console.log(formData);
    };

    return (
        <main>
            <div className='w-25 border border-1 border-dark p-5 m-auto rounded mt-5'>
                <h2 className='text-center mb-4'>Registration</h2>
                <form action="" onSubmit={handleForm}>
                    <div className='mb-2'>
                        <label htmlFor="name" className='form-label mb-1'>Name:</label>
                        <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} name="name" id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter Your Name' />
                        {errors.name && <p className='invalid-feedback'>{errors.name}</p>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email" className='form-label mb-1'>Email:</label>
                        <input type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} name="email" id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Your Email' />
                        {errors.email && <p className='invalid-feedback'>{errors.email}</p>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password" className='form-label mb-1'>Password:</label>
                        <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} name="password" id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter Your Password' />
                        {errors.password && <p className='invalid-feedback'>{errors.password}</p>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="confirmPassword" className='form-label mb-1'>Confirm Password:</label>
                        <input type="password" className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`} name="confirmPassword" id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Enter Confirm Password' />
                        {errors.confirmPassword && <p className='invalid-feedback'>{errors.confirmPassword}</p>}
                    </div>
                    <div className='text-center mt-4'>
                        <button type='submit' className='btn btn-dark px-5'>Submit</button>
                    </div>
                </form>
                <div className='mt-3 text-center text-secondary'>
                    <p>Already have an account? <Link to={LOGIN_ROUTE} className='text-dark'>Sign In</Link> </p>

                </div>
            </div>
        </main>
    );
}

export default Register;