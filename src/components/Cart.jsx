function Cart(props){
    console.log("Cart started");
 console.log("props from Cart", props);

    const {quantity = 0} = props

    return  <div className="cart blue darken-4 white-text">
        <i className = "material-icons">shoping_cart</i>

        {quantity ? <span className = "cart-quantity">{quantity}</span> : 0 }
    </div>

}

export {Cart}