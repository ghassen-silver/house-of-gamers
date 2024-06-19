import { BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity,removeFromCart } from "../../store/features/shopSlice";

// const ShopCard = (props) => {
//   console.log(props);
const ShopCard = ({oneCart}) => {
  console.log(oneCart);
const dispatch = useDispatch()
  return (
    <article className="shopCard">
      <div>
        <img src={oneCart.cover} alt="pc" />
      </div>
      <div>
        <p>{oneCart.name}</p>
        <p><span>{oneCart.quantity}</span> X <span>{oneCart.price} DT</span></p>
        <p>{oneCart.quantity*oneCart.price} DT</p>
      </div>
      <div>
        <BsFillTrashFill onClick={()=>dispatch(removeFromCart(oneCart))}/>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light" onClick={()=>dispatch(decrementQuantity(oneCart))} >-</Button>
          <Button variant="light">{oneCart.quantity}</Button>
          <Button variant="light" onClick={()=>dispatch(addToCart(oneCart))} >+</Button>
        </ButtonGroup>
      </div>
    </article>
  )
}

export default ShopCard