import React, { useState } from 'react';

type InputType = 'text' | 'password' | 'number';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  required?: boolean
  errorMessage?: string
  inputType?: InputType;
  showPasswordToggle?: boolean
}

export const Input = (props: InputProps) => {

  const { label, required, id, errorMessage, inputType = 'text', showPasswordToggle } = props

  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <div>
      <label htmlFor={id} className="cursor-pointer text-eastern-blue-800">
        {label}
        {required && <span aria-hidden="true" className='text-eastern-blue-800'>*</span>}
      </label>
      <div className="relative ">
        <input
          className='border border-secondary-200 p-2 rounded-sm '
          type={showPassword ? 'text' : inputType}
          id={id}
          required={required}
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          {...props}
        />
        {showPasswordToggle && (
          <label htmlFor={`${id}-showPassword`} >
            <input
              type="checkbox"
              id={`${id}-showPassword`}
              checked={showPassword}
              onChange={toggleShowPassword}
              className="mr-2  ml-1 h-3 w-3 text-primary-500 focus:ring-primary-400 border-gray-300 rounded-sm focus:outline-none"
            />
            Mostrar Senha
          </label>
        )}
      </div>
      {errorMessage && (
        <p id={`${id}-error`} className='text-red-600'>
          {errorMessage}
        </p>
      )}
      {props.children}
    </div>
  );
};

export default Input;
