import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "gee-ui";
import logo from "assets/imgs/logo.svg";
import "./Index.scss";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="cs">来吧</a>
        <div>
          <Link to="/tictactoe" className="go-tic">
            来把XO旗！
          </Link>
        </div>
        <div>
          <Link to="/tictactoe/1" className="go-tic">
            来把XO旗！+ 子路由
          </Link>
        </div>
        <div className="components">
          <Button kind="danger">Danger</Button>
        </div>
        <style jsx>{`
          @import "../assets/styles/_variable.scss";

          .App-intro {
            color: $primary-color;
          }

          .go-tic {
            color: $primary-color;
          }

          .cs {
            color: $primary-color;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
