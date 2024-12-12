import useShop from "../ShopContext"
import Product from "./Product";

const CartProducts = () => {

   const{ products, removeFromCart, total } =  useShop();
    return(
        <div className="cart-products">
            <h1>Cart products page</h1>
            {
                products.map((product) => (
                    <div className="cart-product">
                        <div className="cart-title-img">
                            <img src={product.urlImage}/>
                            <span>{product.name}</span>
                        </div>
                        <h5>${product.price}</h5>
                        <button className="delete"
                        onClick={() => removeFromCart(product)}  > Delete
                        </button>
                    </div>

                ))
            }
            <div className="total-price">
                <h2>Total Price: ${total} </h2>
                 </div>
        </div>
    )

}

export default CartProducts;