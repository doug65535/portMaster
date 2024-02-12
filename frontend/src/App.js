import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
  const [message, setMessage] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/hello')
        .then(response => response.text())
        .then(message => {
          setMessage(message);
        });
  },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                // 登录成功，跳转到主页
                window.location.href = '/homepage';
            } else {
                // 登录失败，显示错误提示
                setError('用户名或密码错误');
            }
        } catch (error) {
            console.error('登录失败:', error);
        }
    };
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">{message}</h1>
        </header>
          <form onSubmit={handleSubmit}>
              {error && <div>{error}</div>}
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="用户名" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="密码" required />
              <button type="submit">登录</button>
          </form>
          );
      </div>
  )
}

export default App;