import {useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import { message } from "antd";
import "./Products.css";
function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
const Products = () => {
  const [products,setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchProducts();
  }, [apiUrl]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive:[
      {
        breakpoint:992,
          settings:{
            slidesToShow:4
          }
        }, {
          breakpoint:620,
            settings:{
              slidesToShow:2
            }
          },
        {
          breakpoint:520,
            settings:{
              slidesToShow:1
            }
          }
    ],
  };
  return (
    <div>
      <section className="products">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div className="product-wrapper product-carousel">
           
              <Slider {...sliderSettings}>
                {products.map((product) => (
                   <ProductItem productItem={product} key={product._id} />
                ))}
              </Slider>
            
            <div className="glide__arrows"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
