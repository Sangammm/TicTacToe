import React, { Component } from "react";
import { observable, action, decorate } from "mobx";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.users = ["player1", "Player2"];
    this.turn = 1;
    this.tictac = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gamestatus = "";
    this.game_ended = false;
  }

  checkwon = () => {
    if (this.tictac[0] !== 0) {
      if (this.tictac[0] === this.tictac[1]) {
        if (this.tictac[1] === this.tictac[2]) {
          this.game_ended = true;
          this.gamestatus = this.users[this.turn] + " Has Won the Game";
        }
      }
    }
  };

  updatetictac = id => {
    if (this.tictac[id] === 0) {
      this.tictac[id] = this.turn;
      this.checkwon();
      if (this.turn === 1) {
        this.turn = 2;
      } else {
        this.turn = 1;
      }
    }
  };
}

decorate(Store, {
  tictac: observable,
  turn: observable,
  gamestatus: observable,
  game_ended: observable,
  gamestatus: observable,
  updatetictac: action
});
