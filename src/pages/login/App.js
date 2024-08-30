import logo from '../../images/logo.png';
import sobre from '../../images/sobre.png';
import './App.css';

function App() {
  return (
    <div class="App">
      <div class="container text-center">
        <div class="row text-end">
          <div class="col text-center">
          <a href={"/sobre"} id='icon'><img src={sobre} className="sobre" alt="sobre"/></a>
          </div>
        </div>
        <div class="row">
          <div class="col"> 
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input id="user" type="text" placeholder="Digite Um Nome Aqui..."/>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <a href="/salas" id='botao'><button id="entrar">Entrar</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
