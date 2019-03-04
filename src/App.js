import React, { Component } from "react";
import { Row, Col } from "antd";
import { observer, inject } from "mobx-react";
import "./App.css";
class App extends Component {
  render() {
    const divdesign = {
      margin: "100px",
      width: "300px",
      height: "300px",
      border: "1px solid black"
    };
    const X = "X";
    const O = "O";
    const Show = props => {
      const id = parseInt(props.id);
      if (id === 1) {
        return X;
      }
      if (id === 2) {
        return O;
      } else {
        return "";
      }
    };
    const { tictac, turn, users, updatetictac } = this.props.store;
    return (
      <div style={this.divdesign}>
        <Row>
          <Col span={8}>
            <button onClick={() => updatetictac(0)}>
              <Show id={tictac[0]} />
            </button>
          </Col>
          <Col span={8}>
            <button onClick={() => updatetictac(1)}>
              <Show id={tictac[1]} />
            </button>
          </Col>
          <Col span={8}>
            <button onClick={() => updatetictac(2)}>
              <Show id={tictac[2]} />
            </button>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <button onClick={() => updatetictac(3)}>
              <Show id={tictac[3]} />
            </button>
          </Col>
          <Col span={8}>
            <button onClick={() => updatetictac(4)}>
              <Show id={tictac[4]} />
            </button>
          </Col>
          <Col span={8}>
            <button onClick={() => updatetictac(5)}>
              <Show id={tictac[5]} />
            </button>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <button onClick={() => updatetictac(6)}>
              <Show id={tictac[6]} />
            </button>
          </Col>
          <Col span={8}>
            <button onClick={() => updatetictac(7)}>
              <Show id={tictac[7]} />
            </button>
          </Col>
          <Col span={8}>
            <button onClick={() => updatetictac(8)}>
              <Show id={tictac[8]} />
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default inject("store")(observer(App));
