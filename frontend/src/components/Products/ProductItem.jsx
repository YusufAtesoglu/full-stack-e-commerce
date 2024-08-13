import { useContext } from "react";
import "./ProductItem.css"
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
const ProductItem = ({productItem}) => {
const {cartItems,addToCart}=useContext(CartContext);
const originalPrice = productItem.price.current;
const discountPercentage = productItem.price.discount;

// İndirimli fiyatı hesaplama
const discountedPrice =
  originalPrice - (originalPrice * discountPercentage) / 100;

const filteredCart=cartItems.find(
  (cartItem)=>cartItem._id===productItem._id)
  return (
    <div className="product-item glide__slide glide__slide--clone">
    <div className="product-image">
      <a href={`product/${productItem._id}`}>
      <img src={productItem.img[0]} alt="" className="img1" />
      <img src={productItem.img[1]} alt="" className="img2" />
      </a>
    </div>
    <div className="product-info">
      <Link to={`product/${productItem._id}`} className="product-title">
     {productItem.name}
      </Link>
      <ul className="product-star">
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-half"></i>
        </li>
      </ul>
      <div className="product-prices">
      <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
      <span className="old-price">${originalPrice.toFixed(2)}</span>
      </div>
      <span className="product-discount">-{productItem.price.discount}%</span>
      <div className="product-links">
        <button className="add-to-cart" onClick={() =>
              addToCart({
                ...productItem,
                price: discountedPrice,
              })
            }  disabled={filteredCart}>
          <i className="bi bi-basket-fill" ></i>
        </button>
        <button>
          <i className="bi bi-heart-fill"></i>
        </button>
        <Link to={`product/${productItem._id}`}  >
        <i className="bi bi-eye-fill"></i>
        </Link>
        <a href="#">
          <i className="bi bi-share-fill"></i>
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProductItem
