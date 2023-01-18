import Modal from '../UI/Modal'
import './Cart.styles.css'

const Cart=(props)=>{
    const cartItems =[{id:'c1',name:'sushi',amount:'2',price:'12.99'}].map((item)=><li>{item.name}</li>)
    return <Modal onClose={props.onClose}>
        <ul className='cart-items'>{cartItems}</ul>
        <div className='total'>
            <span>Total Amount</span>
            <span>£35.89</span>
        </div>
        <div className='actions'>
            <button className='button__alt' onClick={props.onClose}>Close</button>
            <button className='button'>Order</button>
        </div>
    </Modal>
}

export default Cart