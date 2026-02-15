import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_ROUTE } from '../constant/formRouter';
import { validateField, validateForm } from '../utilities/validateForm';
import { loginValidationSchema } from '../constant/validationSchemaConstant';

function Login(props) {
    const [formData, SetFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = { ...formData, [name]: value };
        SetFormData(updatedForm);

        const error = validateField(name, value, updatedForm,loginValidationSchema);

        setErrors({ ...errors, [name]: error });
    };

    validateForm(formData, loginValidationSchema);
    const handleForm = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData,loginValidationSchema);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        SetFormData({
            email: "",
            password: ""
        });
        console.log(formData);
    };



    return (
        <main>
            <div className='w-25 border border-1 border-dark p-5 m-auto rounded mt-5'>
                <h2 className='text-center'>Login</h2>
                <form action="" onSubmit={handleForm}>
                    <div className='mb-2'>
                        <label htmlFor="email" className='mb-1'>Email:</label>
                        <input type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} name="email" id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Your Email' />
                        {errors.email && <p className='invalid-feedback'>{errors.email}</p>}
                    </div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} name="password" id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Enter Your Password' />
                    {errors.password && <p className='invalid-feedback'>{errors.password}</p>}
                    <div className='text-center mt-4'>
                        <button type='submit' className='btn btn-dark px-5'>Submit</button>
                    </div>
                </form>
                <div className='mt-3 text-center text-secondary'>
                    <p>Create a new account? <Link to={REGISTER_ROUTE} className='text-dark'>Sign Up</Link> </p>

                </div>
            </div>
        </main>
    );
}

export default Login;