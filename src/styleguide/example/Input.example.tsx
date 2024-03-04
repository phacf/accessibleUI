import React, { useState } from 'react';

import { Input } from '../../components/Input/Input'

export const PasswordExample = () => {

  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Input
        label="Senha"
        inputType="password"  // Use inputType em vez de type
        id="password"
        value={password}
        onChange={handlePasswordChange}
        showPasswordToggle // Ativa a opção de mostrar/ocultar senha
      />
      <p>Senha digitada: {password}</p>
    </div>
  );
}

export const TextInputExample = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <Input
      label='texto'
      id='texto'
      value={text}
      onChange={handleChange}
      />
    </div>
  )
}

export const NumberInputExample = () => {
  const [text, setText] = useState('0');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <Input
      label='number'
      inputType='number'
      id='number'
      value={text}
      onChange={handleChange}
      />
    </div>
  )
}
