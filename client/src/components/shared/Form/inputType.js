import React from 'react'

const InputType = ({
    labelFor,
    labelText,
    inputType,
    name,
    value,
    onchange
}) => {
  return (
    <div>
      <div className="mb-1">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input 
            type={inputType}
            className="form-control" 
            name={name}
            value={value} 
            onChange={onchange}
        />
        
      </div>
    </div>
  )
}

export default InputType
