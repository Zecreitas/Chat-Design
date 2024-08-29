import './App.css';
import arrow from '../../images/arrow.png';
function sobre() {
  return (
    <div className="App">
      <div class="container text-center">
        <div class="row">
        <div class="col-4 text-start">
          <a href={"/"} id='icon'><img src={arrow} className="arrow" alt="arrow"/></a>
        </div>
          <div class="col">
            <h1 id='titulo'>Sobre</h1>
          </div>
          <div class="col-4 text-start">

        </div>
        </div>
        <div class="row">
          <div class="col">
          <p id='descricao'>Quicktalk é uma plataforma de bate-papo online que oferece aos usuários a possibilidade de se conectar rapidamente com outras pessoas ao redor do mundo. O site se destaca pela sua interface intuitiva e de fácil navegação, permitindo conversas em tempo real por meio de mensagens de texto.</p>
          <p id='descricao'>Ideal para quem busca fazer novas amizades, discutir interesses comuns ou simplesmente conversar com pessoas diferentes, o Quicktalk promove um ambiente seguro e agradável, com diversas opções de personalização de perfil e filtros de pesquisa para encontrar interlocutores compatíveis.</p>
          <p id='info' class='text-start mt-5'>Autor: Guilherme</p>
          <p id='info'>Versão: 1.0.0</p>
          <p id='info'>Nome do projeto: Quicktalk</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sobre;