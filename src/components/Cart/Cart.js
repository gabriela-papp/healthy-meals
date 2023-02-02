import { useContext,useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
import './Cart.styles.css'

const Cart=(props)=>{
    const [isCheckout,setIsCheckout]=useState(false)
    const cartCtx=useContext(CartContext)

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

    return <Modal onClose={props.onClose}>
        <ul className='cart-items'>{cartItems}</ul>
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onCancel={props.onClose}/>}
        {!isCheckout && modalActions}
        
       
    </Modal>
}

export default Cart