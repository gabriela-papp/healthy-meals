import React, { useContext,useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
import './Cart.styles.css'

const Cart=(props)=>{
    const [isCheckout,setIsCheckout]=useState(false)
    const cartCtx=useContext(CartContext)
    const [didSubmit,setDidSubmit]=useState(false)

    const totalAmount= `£${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler =(id)=>{
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1})
    }

    const orderHandler=()=>{
        setIsCheckout(true)
    }

    const submitOrderHandler=()=>{
        setDidSubmit(true)
        cartCtx.clearCart()
    }

    const hasItems=cartCtx.items.length>0;

    const cartItems =cartCtx.items.map((item)=>
    (
        <CartItem 
        key={item.id} 
        name={item.name}
        amount={item.amount}
        price={item.price}
         onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
    ))
     const modalActions = <div className='actions'>
            <button className='button__alt' onClick={props.onClose}>Close</button>
            {hasItems &&
                <button className='button' onClick={orderHandler}>Order</button>}
        </div>

        const cartModalContent= (
        <React.Fragment>
        <ul className='cart-items'>{cartItems}</ul>
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose}/>}
        {!isCheckout && modalActions} 
        </React.Fragment>
        )

        const didSubmitModalContent=(
        <React.Fragment>
        <p>Successfully sent out the order.</p>
        <div className='actions'>
            <button className='button__alt' onClick={props.onClose}>Close</button>
        </div>
        </React.Fragment>
        )

    return <Modal onClose={props.onClose}>
        {!didSubmit && cartModalContent}
        {didSubmit && didSubmitModalContent}
    </Modal>
}

export default Cart