import { BsCartFill } from 'react-icons/bs'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import style from '../../assets/style/header.module.css'
import ShopCard from './ShopCard'
import { useSelector } from 'react-redux'
import { shopCart } from '../../store/features/shopSlice'
const Canvas = () => {
  const CartIs = useSelector(shopCart)
  console.log(CartIs)
let items=0
  let total = 0
  CartIs.map((item) => (total += item.price * item.quantity))

  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <p className={style.icon} onClick={handleShow}>
        <BsCartFill />
        <span className={style.badge}>{CartIs.length}</span>
      </p>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {CartIs.map((cart, index) => (
            <ShopCard oneCart={cart} key={index} />
          ))}
          <div className="total">
            <button>Clear cart</button>
            <span>Subtotal</span>
            <span> {total}</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Canvas
