import { useState } from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import "./Gallery.css";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick} data-glide-dir=">">
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick} style={{zIndex:"2"}} data-glide-dir="<">
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

const Gallery = ({singleProduct}) => {   
  const [activeImg, setActiveImg] = useState({
    img: "",
 imgIndex:0,
  })
  useEffect(() => {
    setActiveImg({ img: singleProduct.img[0], imgIndex: 0 });
  }, [singleProduct.img]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  
  return (
    
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${activeImg.img}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
         <Slider {...sliderSettings}>
         {singleProduct.img.map((itemImg, index) => (
              <li
                className="glide__slide glide__slide--active"
                key={index}
                onClick={() => setActiveImg(
                  {img:itemImg,
                    imgIndex:index,
                  })}
              >
                <img
                  src={`${itemImg}`}
                  alt=""
                  className={`img-fluid ${
                    activeImg.imgIndex === index ? "active" : ""
                  }`}
                />
              </li>
            ))}
         </Slider>
           
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default Gallery;
