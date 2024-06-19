import { BsStarFill } from "react-icons/bs";

import { BsCartPlusFill } from "react-icons/bs";

import {addToCart} from "../../store/features/shopSlice"
import {useDispatch } from "react-redux";
const Card = ({product}) => {
  const dispatch= useDispatch()
    // let stars=[]
    // for (let i = 0; i < product.rate; i++) {
    //   stars=[...stars, <BsStarFill/>]
    // }

  return (
    <article className="productCard">
      <img src={product.cover} alt="image" />
      <div className='info'>
        <h5>{product.name}</h5>
        <span>{product.category}</span>
        <b>{product.brand}</b>
        <p>
          
         {[...Array(product.rate)].map((item, index)=>(
           <BsStarFill key={index}/>
         ))}
        </p>
        <span>{product.price} DT</span>
      </div>
      <p className='add' onClick={()=>dispatch(addToCart(product))}>

        <span>Add to cart</span>
        <BsCartPlusFill />
      </p>
    </article>
  )
}

export default Card