"use client";

import React from 'react'
import './Signup/Signup.css'
import { useFormik } from 'formik'
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function Signup() {
    const router = useRouter()

 async function handelesignup(value) {

 let {data} = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,value)
 
 console.log(localStorage.getItem('userToken'));
 if (data.message === 'success') {  
    return alert('success'),router.push('/Signin', { scroll: false })  

 }else{
  return alert('fail')
 }
}
  let formik=useFormik({
    initialValues:{
    name:'',
    email:'',
    phone:'',   
    password:'',
    rePassword:'',
    },onSubmit:handelesignup
    });
  return <>
 <div className="All2">
  <div classNameName="container">  
<div className="form-body"> 
 <div className="form-holder">
     <div className="form-content">
         <div className="form-items">
             <h3>SignUp Today</h3>
             <p>Fill in the data below.</p>
             <form onSubmit={formik.handleSubmit} className="requires-validation" noValidate>
             <div className="col-md-12">
                     <input onChange={formik.handleChange} value={formik.values.name} className="form-control" type="name" name="name" id='name' placeholder="Name" required/>
                      <div className="valid-feedback">name field is valid!</div>
                      <div className="invalid-feedback">name field cannot be blank!</div>
                 </div>
                 <div className="col-md-12">
                     <input onChange={formik.handleChange} value={formik.values.email} className="form-control" type="email" name="email" id='email' placeholder="E-mail Address" required/>
                      <div className="valid-feedback">Email field is valid!</div>
                      <div className="invalid-feedback">Email field cannot be blank!</div>
                 </div>
                 <div className="col-md-12">
                     <input onChange={formik.handleChange} value={formik.values.phone} className="form-control" type="tel" name="phone" id='phone' placeholder="phone" required/>
                      <div className="valid-feedback">Email field is valid!</div>
                      <div className="invalid-feedback">Email field cannot be blank!</div>
                 </div>
                <div className="col-md-12">
                   <input onChange={formik.handleChange} value={formik.values.password} className="form-control" type="password" name="password" id='password' placeholder="Password" required/>
                    <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">Password field cannot be blank!</div>
                </div>
                <div className="col-md-12">
                   <input onChange={formik.handleChange} value={formik.values.rePassword} className="form-control" type="password" name="rePassword" id='rePassword' placeholder="rePassword" required/>
                    <div className="valid-feedback">rePassword field is valid!</div>
                    <div className="invalid-feedback">rePassword field cannot be blank!</div>
                </div>
                 <div className="col-md-12 form-button mt-3">
                     <button id="submit" type="submit" className="btn bg-main text-white">Signin</button>
                 </div>
             </form>
         </div>
     </div>
 </div>
</div></div>
  </div>
</>
}