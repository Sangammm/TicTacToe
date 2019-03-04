import React, { Component } from "react";
import { observable, action, decorate } from "mobx";
import { timeout } from "q";
import { Alert } from "antd";
export default class Store extends Component {
  constructor(props) {
    super(props);
    this.users = ["X", "O"];
    this.turn = 1;
    this.tictac = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gamestatus = null;
    this.game_ended = false;
  }

  check = (one, two, three) => {
    if (one != 0 && two != 0 && three != 0) {
      if (one === two) {
        if (two === three) {
          this.game_ended = true;
          this.gamestatus = this.users[this.turn - 1] + "- Has Won the Game";
        }
      }
    }
  };

  checkwon = () => {
    this.check(this.tictac[0], this.tictac[1], this.tictac[2]);
    this.check(this.tictac[3], this.tictac[4], this.tictac[5]);
    this.check(this.tictac[6], this.tictac[7], this.tictac[8]);
    this.check(this.tictac[0], this.tictac[3], this.tictac[6]);
    this.check(this.tictac[1], this.tictac[4], this.tictac[7]);
    this.check(this.tictac[2], this.tictac[5], this.tictac[8]);
    this.check(this.tictac[0], this.tictac[4], this.tictac[8]);
    this.check(this.tictac[2], this.tictac[4], this.tictac[6]);
    if (this.turn === 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
  };

  updatetictac = id => {
    if (this.tictac[id] === 0) {
      this.tictac[id] = this.turn;
      this.checkwon();
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
