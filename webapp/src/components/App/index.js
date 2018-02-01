import React, { Component } from 'react';

import './app.scss';


export default class extends Component {

  soma() {
    return 2 + 2;
  }

  render() {
    return (
      <div id="app">

        <header className="header">
          <figure className="header__logo">
            <img className="img-responsive" src="src/images/logo.png" />
            <figcaption className="header__logo__figcaption">
              <span>Fractal</span>
              <span className="primary-color">Cervas</span>
            </figcaption>
          </figure>
          <nav className="header__nav">
            <ul className="header__nav__links">
              <li><a className="header__nav__link secondary-color" href="#">Início</a></li>
              <li><a className="header__nav__link secondary-color" href="#">Loja</a></li>
              <li><a className="header__nav__link secondary-color" href="#">Sobre</a></li>
            </ul>
          </nav>
          <div className="header__chart">
            <button className="header__chart__btn">0</button>
          </div>
        </header>

        <main className="main">
          {/* this.props.children */}
          <div className="home">
            <section className="home__botle-area">
              <figure className="home__botle">
                <img className="home__botle--img" src="src/images/botle.png" />
              </figure>
            </section>
            <section className="home__presetation">
              <p className="home__presetation__tagline">
                Bons momentos combinam com boas Cervejas</p>
              <button className="home__presetation__call-to-action">Escolha a sua</button>
            </section>
          </div>

        </main>

        <footer>
          footer
      </footer>
      </div>




    );
  }
}


/* 



  
    */