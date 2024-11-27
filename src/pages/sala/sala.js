import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import arrow from '../../images/arrow.png';
import send from '../../images/send.png';

function Sala() {
  const { idSala } = useParams();
  const [novaMensagem, setNovaMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [timestampEntrada, setTimestampEntrada] = useState(null);
  const [isCooldown, setIsCooldown] = useState(false);


  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchMensagens = async () => {
      const token = localStorage.getItem('token');
      const iduser = localStorage.getItem('iduser');
      const nick = localStorage.getItem('nick');
      const timestamp = localStorage.getItem(`timestamp${idSala}`);
  
      if (!timestamp) {
        console.error('Timestamp de entrada não encontrado');
        return;
      }
  
      setTimestampEntrada(Number(timestamp)); 
  
      console.log("Parâmetros da requisição:", { idSala, timestamp, token, iduser, nick });
  
      try {
        const response = await fetch(`https://chat-api-one-iota.vercel.app/sala/mensagens?idSala=${idSala}&timestamp=${timestamp}`, {
          method: "GET",
          headers: {
            'token': token,
            'iduser': iduser,
            'nick': nick,
          }
        });
  
        console.log("Resposta da API:", response);
  
        const data = await response.json();
        if (response.ok) {
          console.log("Mensagens recebidas:", data);
          const mensagensFiltradas = data.msgs.filter(mensagem => Number(mensagem.timestamp) > Number(timestamp));
          setMensagens(mensagensFiltradas);
        } else {
          console.error("Erro ao buscar mensagens", data);
          alert("Erro ao buscar mensagens.");
        }
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
        alert("Erro ao buscar mensagens.");
      }
    };
  
    fetchMensagens();
  }, [idSala]); 
  
  

  const handleEnviarMensagem = async () => {
    const token = localStorage.getItem('token');
    const iduser = localStorage.getItem('iduser');
    const nick = localStorage.getItem('nick');
  
    console.log("Parâmetros da requisição:", { idSala, token, iduser, nick, novaMensagem });
  
    try {
      const response = await fetch(`https://chat-api-one-iota.vercel.app/sala/mensagem`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'token': token,
          'iduser': iduser,
          'nick': nick,
        },
        body: JSON.stringify({ msg: novaMensagem, idSala }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Mensagem enviada:", data);
        setMensagens((prevMensagens) => [
          ...prevMensagens,
          {
            msg: novaMensagem,
            nick: localStorage.getItem('nick'),
            timestamp: Date.now(),
            iduser: localStorage.getItem('iduser'),
          },
        ]);
        setNovaMensagem(''); 
  
        localStorage.setItem(`timestamp${idSala}`, Date.now());
  
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  
      } else {
        console.error("Erro ao enviar mensagem", data);
        alert("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };
  

  return (
<div className="App mb-5">
  <div className="container" id="chat">
    {mensagens
      .filter((mensagem) => mensagem.msg !== null && mensagem.msg.trim() !== '')
      .map((mensagem) => (
        <div className="row" key={mensagem.timestamp}>
          <div
            className={`col-10 ${
              mensagem.iduser === localStorage.getItem('iduser') ? 'userComent' : 'coment'
            }`}
            id={mensagem.iduser === localStorage.getItem('iduser') ? 'userComent' : 'coment'}
          >
            <div className="row">
              <div
                className={`col ${mensagem.iduser === localStorage.getItem('iduser') ? 'text-start' : ''}`}
              >
                {mensagem.iduser === localStorage.getItem('iduser') ? (
                  <p className="tempo">{new Date(mensagem.timestamp).toLocaleTimeString()}</p>
                ) : (
                  <h2>{mensagem.nick}</h2>
                )}
              </div>
              <div
                className={`col ${mensagem.iduser !== localStorage.getItem('iduser') ? 'text-end' : ''}`}
              >
                {mensagem.iduser === localStorage.getItem('iduser') ? (
                  <h2>{mensagem.nick}</h2>
                ) : (
                  <p className="tempo">{new Date(mensagem.timestamp).toLocaleTimeString()}</p>
                )}
              </div>
            </div>
            <p>{mensagem.msg}</p>
          </div>
        </div>
      ))}
    <div ref={scrollRef} />

    <div className="row">
      <div className="col-11 text-center">
      <input
        id="escrita"
        type="text"
        placeholder="Escreva uma mensagem..."
        value={novaMensagem}
        onChange={(e) => setNovaMensagem(e.target.value)}
        autoComplete="off"
      />

      </div>
      <div className="col text-end">
        <button onClick={handleEnviarMensagem} id="buttonSend">
          <img src={send} className="send" alt="send" />
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Sala;
