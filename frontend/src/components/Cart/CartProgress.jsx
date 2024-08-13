

const CartProgress = ({cartItems}) => {
  console.log(cartItems)
  let total=0;
  cartItems.forEach(item => {
   total =total+(item.price*item.quantity);
  });
  return (
    <div className="free-progress-bar">
    <p className="progress-bar-title">
        Add <strong>${total.toFixed(2)}</strong> to cart and get free shipping! 
    </p>
    <div className="progress-bar">
        <span className="progress"></span>
    </div>
</div>
  )
}

export default CartProgress
