import './Input.styles.css'

const Input =(props)=>{
    return <div className='input'>
        <label htmlFor={props.input.id} className='label'>{props.label}</label>
        <input type="text" id={props.input.id} {...props.input}/>
    </div>
}

export default Input