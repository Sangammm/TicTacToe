import React, { Component } from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import { observer, inject } from "mobx-react";
import "./App.css";
import { autorun } from "mobx";
class App extends Component {
  render() {
    const divdesign = {
      width: "300px",
      height: "300px"
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
    const {
      tictac,
      turn,
      users,
      updatetictac,
      gamestatus,
      game_ended,
      resetgame
    } = this.props.store;
    return (
      <div>
        <div id="container" style={divdesign}>
          <h1>{gamestatus ? gamestatus : `turn = ${users[turn - 1]}`}</h1>
          <Row>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(0)}>
                <Show id={tictac[0]} />
              </button>
            </Col>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(1)}>
                <Show id={tictac[1]} />
              </button>
            </Col>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(2)}>
                <Show id={tictac[2]} />
              </button>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(3)}>
                <Show id={tictac[3]} />
              </button>
            </Col>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(4)}>
                <Show id={tictac[4]} />
              </button>
            </Col>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(5)}>
                <Show id={tictac[5]} />
              </button>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(6)}>
                <Show id={tictac[6]} />
              </button>
            </Col>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(7)}>
                <Show id={tictac[7]} />
              </button>
            </Col>
            <Col span={8}>
              <button disabled={game_ended} onClick={() => updatetictac(8)}>
                <Show id={tictac[8]} />
              </button>
            </Col>
          </Row>
          <button
            style={{
              marginLeft: "110px",
              marginRight: "110px",
              marginTop: "50px",
              width: "80px",
              background: "default",
              height: "50px",
              fontSize: "1em",
              fontStyle: "bold",
              padding: "2px",
              background: "red",
              color: "white"
            }}
            onClick={() => resetgame()}
          >
            Reset Game
          </button>
        </div>
      </div>
    );
  }
}

export default inject("store")(observer(App));
