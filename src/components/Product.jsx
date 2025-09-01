import "../styles/Product.css";
import { useStorePrice , useStoreProductsCount , useStoreProducts } from "../store";
import { useEffect } from "react";

const Product = (props) => {
  const { price , increasePrice } = useStorePrice();
  const { count , increaseCount } = useStoreProductsCount();
  const { products , addProduct } = useStoreProducts();

  const addToCart = (props) => {
    increasePrice(props.price);
    increaseCount();
    addProduct({name: props.name , price: props.price , image: props.image , description: props.description});
  }

  return (
    <>
        <div className="product-card d-flex flex-column gap-1 pt-4 pb-4 align-items-center rounded flex-wrap flex-sm-nowrap">
            {props.image && <img src={props.image} className="mb-1" alt={props.name} />}
            <h2>{props.name}</h2>
            <p className="text-center">
                {props.description}
            </p>

            <p className="link-warning mt-1 mb-4 text-center fw-bold">+ Free shipping !</p>

            <hr className="w-75 mt-0" />

            <div className="d-flex flex-row gap-3 align-items-center ">
                <h4 className="text-center link-success mb-0">{props.price} $</h4>

                <button className="btn btn-danger" onClick={() => addToCart(props)}>Add to Cart</button>

            </div>
        </div>
    </>
  )
}

export default Product