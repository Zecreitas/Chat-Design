import React, { useState, useEffect } from 'react';
import './App.css';
import sobre from '../../images/sobre.png';
import arrow from '../../images/arrow.png';
import profile from '../../images/profile.png';
import privater from '../../images/private.png';
import publica from '../../images/publica.png';
import criar from '../../images/criar.png';
import send from '../../images/send.png';
import { useNavigate } from 'react-router-dom';

function Salas() {
  const [salas, setSalas] = useState([]);
  const [janelaOpen, setJanelaOpen] = useState(false);
  const [senha, setSenha] = useState('');
  const [salaSelecionada, setSalaSelecionada] = useState(null);
  const [erroSenha, setErroSenha] = useState('');
  const navigate = useNavigate(); 

  // Função para buscar salas da API
  const fetchSalas = async () => {
    const token = localStorage.getItem('token');
    const iduser = localStorage.getItem('iduser');
    const nick = localStorage.getItem('nick');

    try {
      const response = await fetch("https://chat-api-one-iota.vercel.app/salas", {
        method: "GET",
        headers: {
          'token': token,
          'iduser': iduser,
          'nick': nick,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setSalas(data);
      } else {
        console.error("Erro ao buscar salas", data);
        alert("Erro ao buscar salas.");
      }
    } catch (error) {
      console.error("Erro ao buscar salas:", error);
    }
  };

  useEffect(() => {
    fetchSalas();
  }, []);

  const openJanela = (sala) => {
    setSalaSelecionada(sala);
    setJanelaOpen(true);
  };

  const closeJanela = () => {
    setJanelaOpen(false);
    setSenha('');
    setErroSenha('');
  };

  const senhaChange = (e) => {
    setSenha(e.target.value);
  };

  const senhaSubmit = async () => {
    if (senha && salaSelecionada) {
      console.log("Senha enviada:", senha);
      try {
        const response = await fetch(`https://chat-api-one-iota.vercel.app/salas/${salaSelecionada._id}/verificar-senha`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ senha }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          navigate(`/sala/${salaSelecionada._id}`);
        } else {
          setErroSenha(data.mensagem || 'Senha incorreta. Tente novamente.');
        }
      } catch (error) {
        console.error("Erro ao verificar senha:", error);
        setErroSenha('Erro ao verificar senha. Tente novamente.');
      }
    } else {
      setErroSenha('Por favor, insira a senha.');
    }
  };
  

  const entrarSala = async (sala) => {
    const token = localStorage.getItem('token');
    const iduser = localStorage.getItem('iduser');
    const nick = localStorage.getItem('nick');
  
    const idSala = sala._id;
  
    try {
      const response = await fetch(`https://chat-api-one-iota.vercel.app/sala/entrar?idSala=${idSala}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'token': token,
          'iduser': iduser,
          'nick': nick,
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro ao entrar na sala');
      }
  
      const data = await response.json();
      console.log('Entrou na sala com sucesso:', data);
  
      const timestamp = Date.now();
      localStorage.setItem(`timestamp${idSala}`, timestamp);
      console.log(`timestamp${idSala}`, timestamp);
  
      navigate(`/sala/${idSala}`);
    } catch (error) {
      console.error('Erro ao entrar na sala:', error);
    }
  };
  

  

  return (
    <div className="App">
      <div className="row">
        <div className="col-4 text-start">
          <a href={"/login"} id='icon'><img src={arrow} className="arrow" alt="arrow"/></a>
        </div>
        <div className="col-4 text-center">
          <h1 id ='tit'>Salas</h1>
        </div>
        <div className="col-4 text-end">
          <a href={"/sobre"} id='icon'><img src={sobre} className="sobre" alt="sobre"/></a>
        </div>
      </div>
      <div className="container" id='salas'>
        <div className="row">
          <div className="col">
            <input id="search" type="text" placeholder="Pesquisar..."/>
          </div>
          <div className="col">
            <a href=""><img src={send} className="send" id="send" alt="send"/></a>
          </div>
          <div className="col text-end">
            <a href=""><img src={criar} className="criar" alt="criar"/></a> 
          </div>
          <div className="col text-end">
            <a href=''><p id="criar">Criar Sala</p></a>
          </div>
        </div>
        {salas.map(sala => (
          <div key={sala._id} onClick={() => sala.tipo === 'Privada' ? openJanela(sala) : entrarSala(sala)}>
            <div className="row mt-5" id='sala'>
              <div className="col">
                <h2 id='salaText'>Sala: {sala.nome}</h2>
                <p id='desc'>{sala.descricao}</p>
                <div className="row">
                  <div className="col-1">
                    <li>
                      <img src={profile} className="profile" alt="profile"/>
                    </li>
                  </div>
                  <div className="col-9">

                  </div>
                  <div className="col-1">
                    <li>
                      <img src={sala.tipo === 'Pública' ? publica : privater} className={sala.tipo === 'público' ? 'publica' : 'privater'} alt={sala.tipo}/>
                    </li>
                  </div>
                  <div className="col-1">
                    <p id='tipo'>{sala.tipo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {janelaOpen && (
          <div className="janela">
            <div className="janelaCont">
              <h2>Insira a Senha da Sala</h2>
              <input
                id='input'
                type="password"
                value={senha}
                onChange={senhaChange}
                placeholder="Senha"
              />
              {erroSenha && <p style={{ color: 'red' }}>{erroSenha}</p>}
              <div className="janelaButtons">
                <button onClick={senhaSubmit} id='botoes'>Entrar</button>
                <button onClick={closeJanela} id='botoes'>Cancelar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Salas;
