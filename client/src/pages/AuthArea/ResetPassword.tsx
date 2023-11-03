import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react'
import { useForm } from 'react-hook-form';
import jwtDecode from 'jwt-decode';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const params = useParams();


  const handlePasswordChange = (event: SyntheticEvent) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Get token from params
    const token = params.token;
    console.log(token);
    // Get password from form
   
  };

  return (
    <div>
      <h2>Сброс пароля</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Новый пароль:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Подтвердите пароль:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <button type="submit">Сбросить пароль</button>
      </form>
    </div>
  )
}

export default ResetPassword