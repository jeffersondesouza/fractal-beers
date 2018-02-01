import React, { Component } from 'react';

export default class Layout extends Component {

  render() {
    return (


      <div id="main">
        <header className="Header">
          <div className="container">
            <figure className="Header-logo inline-block">
              <img className="img-responsive" src="src/images/logo.png" />
              <figcaption className="Header-logo-figcaption">
                <span>Fractal</span>
                <span className="Header-logo-figcaption--primary">Cervas</span>
              </figcaption>
            </figure>
            <nav className="Header-nav inline-block">
              <ul className="Header-nav-links">
                <li><a className="Header-nav-link" href="#">Início</a></li>
                <li><a className="Header-nav-link" href="#">Loja</a></li>
                <li><a className="Header-nav-link" href="#">Sobre</a></li>
                <li><a className="Header-nav-link" href="#">Contatos</a></li>
              </ul>
            </nav>
            <div className="Header-chart">
              <button className="Header-chart-btn" >B</button> 
            </div>
          </div>
        </header>
        <main className="HomePage">
          <div className="container center">
            <figure className="HomePage-botle inline-block">
              <img src="src/images/botle.png" />
            </figure>
            <aside className="HomePage-action inline-block">
              <p className="HomePage-tagline">Bons momentos combinam com boas Cervejas</p>
              <button className="HomePage-button--callToAction">Escolha a sua</button>
            </aside>
          </div>
        </main>
        <footer>
          footer
        </footer>
      </div>








    );
  }
}