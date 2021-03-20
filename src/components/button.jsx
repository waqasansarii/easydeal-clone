import React from 'react'
import './style/btn.css'



 const Button=({value,onClick,className})=> {
    return (
        <div>
            <button className={`_Btn ${className}`} onClick={onClick}  >{value}</button>
        </div>
    )
}


export default Button