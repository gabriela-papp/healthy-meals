import './CartItem.styles.css'

const CartItem=props=>{
    const price= `£${props.price}`

    return(
        <li className='cart_item'>
            <div>
                <h2>{props.name}</h2>
                <div className='cart-summary'>
                    <span className='price'>{price}</span>
                    <span className='amount'>x {props.amount}</span>
                </div>
            </div>
                <div className='actions'>
                    <button onClick={props.onRemove}>-</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
            
        </li>
    )
}

export default CartItem