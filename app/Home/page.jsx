"use client";
import React, { useCallback, useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { increase } from "../Redux/CounterSlice";
import toast from "react-hot-toast";
import { addToCart } from "../Redux/cartslice";
import Categories from "../Categories/page.jsx";
export default function Home() {

  let dispatch = useDispatch();

  const [products, setproducts] = useState([]);
  let [cart, setCart] = useState();

  async function getproduct() {
    const result = await fetch(
      `https://route-ecommerce.onrender.com/api/v1/products`,

      {
        cache: "no-cache",

        method: "GET",
      }
    );

    const response = await result.json();

    setproducts(response.data);
  }

  const Addproduct = async (productId) => {
    const originalPromiseResult = await dispatch(addToCart(productId));
    setCart(originalPromiseResult.payload.data.products);
  };

  let toaster = useCallback(() => {
    toast("The Product Add To Cart Sucssesfully");
  }, [increase]);

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <Categories />
      <div className="container">
        <div className="row w-100">
          {products.map((product) => (
            <div className="product col-md-2 px-2 py-2 text-center ">
              <Link
                className="text-decoration-none text-dark"
                href={"/Home/" + product._id}
              >
                <img className="w-100 h-10" src={product.imageCover} alt="" />
                <span className="text-main">{product.subcategory.name}</span>
                <h6 className="fw-bolder"></h6>
                <h6>price:{product.price} EGP</h6>
                <h6>
                  <i className="rating fa-solid fa-star"></i>
                </h6>
              </Link>
              <button
                onClick={() => {
                  dispatch(increase()), Addproduct(product._id);
                }}
                className="btn bg-main bg-green"
              >
                Add To Cart +
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
