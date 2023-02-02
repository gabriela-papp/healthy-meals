import './Checkout.styles.css'

const Checkout= props=>{
    const confirmHandler=(e)=>{
        e.preventDefault()
    }
    return (
        <form onSubmit={confirmHandler}>
            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name'/>
            </div>
            <div>
                <label htmlFor="name">Street</label>
                <input type="text" id='street'/>
            </div>
            <div>
                <label htmlFor="name">Postal Code</label>
                <input type="text" id='postal'/>
            </div>
            <div>
                <label htmlFor="name">City</label>
                <input type="text" id='city'/>
            </div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    )
}

export default Checkout
