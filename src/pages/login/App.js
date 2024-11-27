import React, { useState } from 'react';
import logo from '../../images/logo.png';
import sobre from '../../images/sobre.png';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [nick, setNick] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    console.log("Botão clicado");
    try {
      const response = await fetch("https://chat-api-one-iota.vercel.app/entrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nick }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login bem-sucedido", data);
        localStorage.setItem('token', data.token); 
        localStorage.setItem('iduser', data.idUser); 
        localStorage.setItem('nick', nick);
        navigate("/salas");
      } else {
        console.error("Erro no login", data);
        alert("Erro ao entrar.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="App">
      <div className="container text-center">
        <div className="row text-end">
          <div className="col">
            <a href={"/sobre"} id="icon">
              <img src={sobre} className="sobre" alt="sobre" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              id="user"
              type="text"
              placeholder="Digite Um Nome Aqui..."
              value={nick}
              onChange={(e) => setNick(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button id="entrar" onClick={handleLogin}>Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
