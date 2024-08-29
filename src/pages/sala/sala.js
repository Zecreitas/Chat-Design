import './App.css';
import sobre from '../../images/sobre.png';
import arrow from '../../images/arrow.png';
import send from '../../images/send.png';

function sala() {
  return (
    <div class="App">
      <div class="row">
        <div class="col-4 text-start">
          <a href={"/salas"} id='icon'><img src={arrow} className="arrow" alt="arrow"/></a>
        </div>
        <div class="col-4 text-center">
          <h1 id ='tit'>Sala: Canto do Mine</h1>
        </div>
        <div class="col-4 text-end">
          <a href={"/sobre"} id='icon'><img src={sobre} className="sobre" alt="sobre"/></a>
        </div>
      </div>
      <div class="container" id='chat'>
         <div class="row mt-5">
          <div class="col" id='coment'>
            <div class="row">
              <div class="col">
                <h2>Zecreitas</h2>
              </div>
              <div class="col text-end">
                <p class="tempo">17:23</p>
              </div>
            </div>
            <p>Alguém pra jogar skyblock?</p>
          </div>
        </div>
        <div class="row">
          <div class="col" id='coment'>
            <div class="row">
              <div class="col">
                <h2>Igor12X</h2>
              </div>
              <div class="col text-end">
                <p class="tempo">17:23</p>
              </div>
            </div>
            <p>Eu topo!</p>
          </div>
        </div>
        <div class="row">
          <div class="col" id='userComent'>
            <div class="row">
              <div class="col">
                <p class="tempo">17:24</p>
              </div>
              <div class="col text-end">
                <h2>Guilherme</h2>
              </div>
            </div>
            <div class="row">
              <div class="col text-end">
                <p>Eu topo!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-11 text-center">
            <input id="escrita" type="text" placeholder="Escreva uma mensagem..."/>
          </div>
          <div class="col text-end">
            <a href={"/sala"} id='icon'><img src={send} className="send" alt="send"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sala;