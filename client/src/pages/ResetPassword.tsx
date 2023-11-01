import React, { SyntheticEvent, useState } from 'react'

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event: SyntheticEvent) => {
    setPassword(event);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы отправляете запрос на сервер для обновления пароля, передавая новый пароль и токен сброса пароля.
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