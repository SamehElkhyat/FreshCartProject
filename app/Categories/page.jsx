import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Categories.css";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arows: false,
    autoplay: true,
  };

  const [categories, setcategories] = useState([]);
  async function getproduct() {
    let { data } = await axios.get(
      `https://route-ecommerce.onrender.com/api/v1/categories`
    );
    setcategories(data.data);
  }

  useEffect(() => {
    getproduct();
  }, []);
  return (
    <>
      <div className="container">
        <h3>Shop Popular Categories</h3>

        <Slider
          className="Slider my-5 justify-content-center"
          {...settings}
          autoplaySpeed={2000}
        >
          {categories.map((categorie) => (
            <div className="wrappers col-md-1 text-center">
              <img
                className="image w-100 "
                height={200}
                src={categorie.image}
                alt=""
              />
              <h6>{categorie.name}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
