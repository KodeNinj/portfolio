import React from 'react'

const Input = (props) => {
    const {placeholder, type} = props
  return (
    <div className='input'>
        <input type={type} placeholder={placeholder} required/>
    </div>
  )
}

export default Input