import { useRef,useState } from 'react'
import './Checkout.styles.css'

const isEmpty=value=>value.trim()==='';
const isNotFiveChars=value=>value.trim().length !==5;

const Checkout= props=>{
    const [formInputValidity,setFormInputValidity]=useState({
        name:true,
        street:true,
        postal:true,
        city:true
    })
    const nameInput=useRef()
    const streetInput=useRef()
    const postalInput=useRef()
    const cityInput=useRef()

    const confirmHandler=(e)=>{
        e.preventDefault();
        const enteredName=nameInput.current.value;
        const enteredStreet=streetInput.current.value;
        const enteredPostal=postalInput.current.value;
        const enteredCity=cityInput.current.value;

        const enteredNameIsValid=!isEmpty(enteredName)
        const enteredStreetIsValid=!isEmpty(enteredStreet)
        const enteredPostalIsValid=!isEmpty(enteredPostal)
        const enteredCityIsValid=!isEmpty(enteredCity)

        setFormInputValidity({
            name:enteredNameIsValid,
            street:enteredStreetIsValid,
            postal:enteredPostalIsValid,
            city:enteredCityIsValid
        })

        const formIsValid =enteredNameIsValid&&enteredStreetIsValid&&enteredPostalIsValid&&enteredCityIsValid;


        if(!formIsValid){
            return;

        }
    }
    return (
         <form className='checkout-form' onSubmit={confirmHandler}>
      <div className={`control ${formInputValidity.name?'':'invalid'}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInput}/>
        {!formInputValidity.name&&<p>Please enter a valid name.</p>}
      </div>
      <div className={`control ${formInputValidity.street?'':'invalid'}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInput}/>
        {!formInputValidity.street &&<p>Please enter a valid street.</p>}
      </div>
      <div className={`control ${formInputValidity.postal?'':'invalid'}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInput}/>
        {!formInputValidity.postal &&<p>Please enter a valid postal code.</p>}
      </div>
      <div className={`control ${formInputValidity.city?'':'invalid'}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInput}/>
        {!formInputValidity.city &&<p>Please enter a valid city.</p>}
      </div>
      <div className='actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className='submmit'>Confirm</button>
      </div>
    </form>
    )
}

export default Checkout
