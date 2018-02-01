import React, { Component } from 'react';

export default class Layout extends Component {

  render() {
    return (




      <div id="main">
        <header className="Header">
          <div className="container">
            <figure className="Header-logo">
              <img className="img-responsive" src="src/images/logo.png" />
              <figcaption className="Header-logo-figcaption">
                <span>Fractal</span>
                <span className="Header-logo-figcaption--primary">Cervas</span>
              </figcaption>
            </figure>
            <nav className="Header-nav">
              <ul className="Header-nav-links">
                <li><a className="Header-nav-link" href="#">Início</a></li>
                <li><a className="Header-nav-link" href="#">Loja</a></li>
                <li><a className="Header-nav-link" href="#">Sobre</a></li>
                <li><a className="Header-nav-link" href="#">Contatos</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="HomePage">
          <figure className="HomePage-botle">
            <img className="img-responsive" src="src/images/botle.png" />
          </figure>
          <p className="HomePage-tagline">Bons momentos combinam com boas Cervejas</p>
          <button className="HomePage-callToAction">Escolha a sua</button>

        </main>
        <footer>
          footer
        </footer>
      </div>








    );
  }
}