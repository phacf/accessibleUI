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
