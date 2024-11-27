import './App.css';
import arrow from '../../images/arrow.png';

function Sobre() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row align-items-center mb-4">
          <div className="col-4 text-start">
            <a href="/login" id="icon">
              <img src={arrow} className="arrow" alt="Voltar" />
            </a>
          </div>
          <div className="col">
            <h1 id="titulo">Sobre</h1>
          </div>
          <div className="col-4"></div>
        </div>

        <div className="row">
          <div className="col">
            <div id="descricao-card">
              <p className="descricao">
                <strong>Quicktalk</strong> é uma plataforma de bate-papo online que oferece aos usuários a possibilidade de se conectar rapidamente com outras pessoas ao redor do mundo. 
              </p>
              <p className="descricao">
                Ideal para quem busca fazer novas amizades, discutir interesses comuns ou simplesmente conversar com pessoas diferentes, o Quicktalk promove um ambiente seguro e agradável, com diversas opções de personalização de perfil e filtros de pesquisa.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <div id="info-card">
              <p className="info"><strong>Autor:</strong> Guilherme</p>
              <p className="info"><strong>Versão:</strong> 1.0.0</p>
              <p className="info"><strong>Nome do projeto:</strong> Quicktalk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;