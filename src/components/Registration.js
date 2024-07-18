import React from 'react'
import 'C:/Users/Admin/Desktop/Projects/peng/src/components/Registeration.css'
import { useFormik } from 'formik'
import { signUpSchema } from 'C:/Users/Admin/Desktop/Projects/peng/src/schemas';

const initialValues={
  username: "",
  email:"",
  password:"",
  confirm_password:"",
};

const Registration = () => {

  const {values,errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    validateOnChange:true,
    onSubmit : (values,action)=>{
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <div className="container">                
    <h1 className="modal-title">Registration Form</h1>

    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="username" className="input-label"> Username </label>
        <input type="name"
          autoComplete="off"
          name="username"
          id="username"
          placeholder="Username"
          value={values.username} onChange={handleChange} onBlur={handleBlur}
          />
          {errors.username && touched.username ? (<p className="form-error">{errors.username}</p>) : null}
      </div>

      <div className="input-block">
        <label htmlFor="email" className="input-label"> Email </label>
        <input type="email"
          autoComplete="off"
          name="email"
          id="email"
          placeholder="Email" 
          value={values.email} onChange={handleChange} onBlur={handleBlur}
          />
          {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
          </div>

      <div className="input-block">
        <label htmlFor="password" className="input-label"> Password </label>
        <input type="password"
          autoComplete="off"
          name="password"
          id="password"
          placeholder="Password" 
          value={values.password} onChange={handleChange} onBlur={handleBlur}
          />
          {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : null}
          </div>

      <div className="input-block">
        <label htmlFor="confirm_password" className="input-label"> Confirm Password </label>
        <input type="password"
          autoComplete="off"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
          value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} 
          />
          {errors.confirm_password && touched.confirm_password ? (<p className="form-error">{errors.confirm_password}</p>) : null}
          </div>

      <div className="registerBtn">
        <button className="input-button" type="submit">
          Register
        </button>
      </div>
    </form>
   

    </div>   
  )
}

export default Registration
