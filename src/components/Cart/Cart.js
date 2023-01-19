import { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import './Cart.styles.css'

const Cart=(props)=>{
    const cartCtx=useContext(CartContext)

    const totalAmount= `£${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler =(id)=>{
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1})
    }
    const hasItems=cartCtx.items.length>0;

    const cartItems =cartCtx.items.map((item)=>
    (
        <CartItem 
        key={item.id} 
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={cartItemAddHandler}
        onRemove={cartItemRemoveHandler}
        />
    ))


    return <Modal onClose={props.onClose}>
        <ul className='cart-items'>{cartItems}</ul>
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className='actions'>
            <button className='button__alt' onClick={props.onClose}>Close</button>
            {hasItems &&
                <button className='button'>Order</button>}
        </div>
    </Modal>
}

export default Cart