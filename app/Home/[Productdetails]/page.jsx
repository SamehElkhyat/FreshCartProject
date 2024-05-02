"use client";
import {useEffect, useState} from 'react'
import './Productdetails.css';
export default function Productdetails({params}){

  const [productsDetails, setproductsDetails] = useState([]);
console.log(params);
const  getproductDetails= async ()=> {
  
  const result = await fetch(
  
    `https://ecommerce.routemisr.com/api/v1/products/${params.Productdetails}`,
  
    {
  
      cache: "no-cache",
  
      method: "GET",
   
    }
  
  );
  
  const response = await result.json();
  
  console.log(response);
  
  setproductsDetails(response.data);  
  
  }

useEffect(() => {
  
  getproductDetails()

}, [])
return <>
  <div className="container"> 
  <div className="col-md-3">
  <img className="productimage w-100 ms-auto" src={productsDetails.imageCover}alt=""/>
   <div className="titels">
   <h6 className="w-100 fw-bolder">
      {productsDetails.description}
    </h6>
   <h6 className="title fw-bolder">
      {productsDetails.title}
    </h6>
    <h6>price:{productsDetails.price}EGP</h6>
    <h6>
    <i className="rating fa-solid fa-star"></i>
    {productsDetails.ratingsAverage}
    </h6>
    </div>
    </div>
    <button className="w-100 btn bg-main bg-green me-auto">Add To Cart +</button>
  </div>   
</>
}