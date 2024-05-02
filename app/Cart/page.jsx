"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Carts } from "../Redux/ShowCartslice";
import { DeleteCart } from "../Redux/DeleteCartslice";
import { UpdateCart } from "../Redux/UpdateCartslice";

export default function AddToCart() {
  let dispatch = useDispatch();
  let Dispatch = useDispatch();
  let Updatedispatch = useDispatch();

  let [Products, setProducts] = useState([]);

  let [totalCartPrice, setTotalPrice] = useState([]);

  const onClick = async () => {
    let { payload } = await dispatch(Carts());

    setTotalPrice(payload.data.data);

    setProducts(payload.data.data.products);
  };

  async function RemoveItem(productId) {

    let { payload } = await Dispatch(DeleteCart(productId));

    setProducts(payload.data.data.products);
  }

  const UpdateCountQuintity = async (productId, count) => {
    
    let { payload } = await Updatedispatch(UpdateCart({ productId, count }));

    setProducts(payload.data.data.products);
  };

  useEffect(() => {
    onClick();
  }, []);

  return (
    <>
    <div className="bg-main-light p-4 my-4">
        <h1 className="">Shop Cart</h1>
        <h4 className="text-main">
          TotalPrice:{totalCartPrice.totalCartPrice}
        </h4>

        {Products.map((prod) => (
          <div
            key={prod.product._id}
            className="row align-items-center border-bottom py-2 my-2"
          >
            <div className="col-md-1 ">
              <img src={prod.product.imageCover} className="w-100" alt="" />
            </div>
            <div className="col-md-11  d-flex justify-content-between">
        <div className=""> 
              <h6>{prod.product.title}</h6>
              <h6 className="text-main">{prod.price}</h6>
        </div>

<div className="col-md-2 d-flex justify-content-between">
                
                <button
                onClick={() =>
                  UpdateCountQuintity(prod.product._id, prod.count + 1)
                }
                className="btn border-main btn-sm"
              >
                +
              </button>
              <h6 className="py-3 align-items-center text-main ">
                {prod.count}
                {localStorage.setItem("totalCarts", prod.count)}
              </h6>
              <button
                onClick={() =>
                  UpdateCountQuintity(prod.product._id, prod.count - 1)
                }
                className="btn border-main btn-sm"
              >
                -
              </button>
              <button
                onClick={() => RemoveItem(prod.product._id)}
                className="btn border-main btn-sm"
              >
                Remove Item
              </button>
</div>
            </div>
          </div>
        ))}
        </div>
    </>
  );
}
