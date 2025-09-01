import {
  useStorePrice,
  useStoreProductsCount,
  useStoreProducts,
} from "../store";

import CartProduct from "../components/CartProduct";

import "../styles/Cart.css";

import { useState } from "react";

const Cart = () => {
  const { products } = useStoreProducts();
  const { price } = useStorePrice();
  const { count } = useStoreProductsCount();

  const [ addedProduct , setAddedProduct ] = useState([])

  return (
    <>
      <h1 className="text-center mt-4">Cart</h1>

      <div className="d-flex flex-row   justify-content-center flex-wrap flex-sm-nowrap mt-3">

        <div className="row">
            {products
                .filter((value, index, self) =>
                index === self.findIndex((p) => p.name === value.name)
                )
                .map((value, index) => (
                <div key={index} className="col-4">
                    <CartProduct
                    name={value.name}
                    price={value.price}
                    description={value.description}
                    image={value.image}
                    />
                </div>
                ))}

        </div>

        <div className="cart-info-box d-flex flex-column gap-3 align-items-center rounded pt-3">
            <h3>Cart Info</h3>
            <hr className="w-100 mt-0 mb-0" />
            <span><span className="link-danger">Price : </span> {price} $</span>
            <span><span className="link-danger">Total products : </span> {count}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
