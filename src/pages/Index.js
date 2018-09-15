import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "assets/imgs/logo.svg";
import { Button, Modal } from "gee-ui";
import styles from "./Index.scss";

class Index extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

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
          <Button>Antd Button</Button>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Index;
