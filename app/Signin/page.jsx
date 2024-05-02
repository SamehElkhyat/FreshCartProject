"use client";
import React, { useState } from "react";
import "./Signin.css";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";
import { incoded } from "../Redux/userToken";
import { useDispatch } from "react-redux";

export default function Signin() {

  let dispatch= useDispatch();

const [Isloding, setIsloding] = useState(true)

  const router = useRouter()

  
async function handelesignin(values) {
  
    setIsloding(false)
  
    let {data} = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values)
  
    if (data.message === 'success') { 
  
      setIsloding(true)
    
      toast("you signed in successfuly") 
  
     localStorage.setItem('userToken',data.token)  
   
      router.push('/Home')

    }else{
  
      return toast("your signed in feild") 

      }
     
    }

    let formik = useFormik({
  
      initialValues: {
  
        email: "",
  
        password: "",
  
      },
  
      onSubmit: handelesignin,
  
    });
  
    return (
    <>
      <div className="All1">
        <div className="container">
          <div className="form-body">
            <div className="form-holder">
              <div className="form-content">
                <div className="form-items">
                  <h3>SignIn Today</h3>
                  <p>Fill in the data below.</p>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="requires-validation"
                    noValidate
                  >
                    <div className="col-md-12">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail Address"
                        required
                      />
                      <div className="valid-feedback">
                        Email field is valid!
                      </div>
                      <div className="invalid-feedback">
                        Email field cannot be blank!
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                      />
                      <div className="valid-feedback">
                        Password field is valid!
                      </div>
                      <div className="invalid-feedback">
                        Password field cannot be blank!
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="invalidCheck"
                        required
                      />
                      <label className="form-check-label">
                        I confirm that all data are correct
                      </label>
         
                      <div className="invalid-feedback">
                        Please confirm that the entered data are all correct!
                      </div>
                    </div>
                    <div className="form-button mt-3">
                    <button  onClick={()=> {dispatch(incoded())}} id="submit" type="submit" className="btn bg-main text-white">Signin
                      </button>
                      
                 </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
