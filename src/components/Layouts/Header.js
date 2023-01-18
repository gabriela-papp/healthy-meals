import { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import meals from '../../assets/healthy-meals.jpg'
import './Header.styles.css'

const Header=(props)=>{
    return <Fragment>
        <header className='header'>
            <h1>Healthy Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className='main-image'>
            <img src={meals} alt='of a meals'/>
        </div>
    </Fragment>
}

export default Header