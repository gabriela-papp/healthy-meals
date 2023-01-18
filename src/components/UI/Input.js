import React from 'react'
import './Input.styles.css'

const Input =React.forwardRef((props,ref)=>(
     <div className='input'>
        <label htmlFor={props.input.id} className='label'>{props.label}</label>
        <input type="text" ref={ref} id={props.input.id} {...props.input}/>
    </div>
))

export default Input