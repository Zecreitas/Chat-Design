import React, { useState } from 'react';  
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
  const [janelaOpen, setJanelaOpen] = useState(false);
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); 


  const openJanela = () => {
    setJanelaOpen(true);
  };

  const closeJanela = () => {
    navigate('/');
    setJanelaOpen(false);
    setSenha('');  
  };

  const senhaChange = (e) => {
    setSenha(e.target.value);
  };

  const senhaSubmit = () => {
    if (senha) {
      navigate('/sala');
    }
  };

  return (
    <div class="App">
      <div class="row">
        <div class="col-4 text-start">
          <a href={"/"} id='icon'><img src={arrow} className="arrow" alt="arrow"/></a>
        </div>
        <div class="col-4 text-center">
          <h1 id ='tit'>Salas</h1>
        </div>
        <div class="col-4 text-end">
          <a href={"/sobre"} id='icon'><img src={sobre} className="sobre" alt="sobre"/></a>
        </div>
      </div>
      <div class="container" id='salas'>
      <div class="row">
          <div class="col">
            <input id="search" type="text" placeholder="Pesquisar..."/>
          </div>
          <div class="col">
            <a href=""><img src={send} className="send" id="send" alt="send"/></a>
          </div>
          <div class="col text-end">
            <a href=""><img src={criar} className="criar" alt="criar"/></a> 
          </div>
          <div class="col text-end">
            <a href=''><p id="criar">Criar Sala</p></a>
          </div>
        </div>
        <a href="/sala">
          <div class="row mt-5" id ='sala'>
            <div class="col">
              <h2 id ='salaText'>Sala: Canto do Mine</h2>
              <p id ='desc'>Chat feito para achar pessoas para jogar um Minezinho</p>
              <div class="row">
                <div class="col-1">
                  <li>
                    <img src={profile} className="profile" alt="profile"/>
                  </li>
                </div>
                <div class="col-9">
                  <p id ='quant'>13/25</p>
                </div>
                <div class="col-1">
                  <li>
                    <img src={publica} className="publica" alt="publica"/>
                  </li>
                </div>
                <div class="col-1">
                  <p id ='tipo'>Público</p>
                </div>
              </div>
            </div>
          </div>
        </a>
          <div class="row" id ='sala'
          onClick={openJanela}>
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
            <div className="janelaButtons">
              <button onClick={senhaSubmit} id='botoes'>Entrar</button>
              <button onClick={closeJanela} id='botoes'>Cancelar</button>
            </div>
          </div>
        </div>
      )}
            <div class="col">
              <h2 id ='salaText'>Sala: Canto do Mine</h2>
              <p id ='desc'>Chat feito para achar pessoas para jogar um Minezinho</p>
              <div class="row">
                <div class="col-1">
                  <li>
                    <img src={profile} className="profile" alt="profile"/>
                  </li>
                </div>
                <div class="col-9">
                  <p id ='quant'>13/25</p>
                </div>
                <div class="col-1">
                  <li>
                    <img src={privater} className="privater" alt="privater"/>
                  </li>
                </div>
                <div class="col-1">
                  <p id ='tipo'>Privada</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Salas;