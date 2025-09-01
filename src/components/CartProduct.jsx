import "../styles/Product.css";
import { useStorePrice , useStoreProductsCount , useStoreProducts } from "../store";
import { useState , useEffect } from "react";

const CartProduct = (props) => {
  const { price , increasePrice , decrementPrice } = useStorePrice();
  const { count , increaseCount , decrementCount } = useStoreProductsCount();
  const { products , addProduct , removeProduct , removeOneProduct } = useStoreProducts();

  const [ thisProductCount , setThisProductCount ] = useState(products.filter(product => product.name === props.name).length)

  useEffect(() => {
    console.log(products)
  } , [])


  const increaseProduct = (props) => {
    increasePrice(props.price);
    increaseCount();
    addProduct({name: props.name , price: props.price , image: props.image , description: props.description})
    setThisProductCount(thisProductCount + 1)
  }

  const decrementProduct = (props) => {
    decrementPrice(props.price);
    decrementCount();
    if (thisProductCount > 1) {
        setThisProductCount(thisProductCount - 1);
        removeOneProduct(props.name)
        console.log(products)
    } else {
        removeProduct(props.name)
    }
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

            <div className="d-flex flex-column gap-3 align-items-center ">
                <h4 className="text-center link-success mb-0">{props.price} $</h4>

                <button className="btn btn-danger" onClick={() => increaseProduct(props)}> {thisProductCount} Increase</button>

                <button className="btn btn-danger" onClick={() => decrementProduct(props)}> Decrement</button>
            </div>
        </div>
    </>
  )
}

export default CartProduct;