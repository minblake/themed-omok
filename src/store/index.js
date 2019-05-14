import Vue from "vue";
import Vuex from "vuex";
import board from "./modules/board";
import theme from "./modules/theme";
import player from "./modules/player";
import { checkMove } from "./helper";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    board,
    player
  },
  state: {
    lastMove: -1,
    winner: -1
  },
  getters: {
    lastMove: state => state.lastMove,
    winner: state => state.winner
  },
  mutations: {
    updateLastMove: (state, position) => (state.lastMove = position),
    updateWinner: (state, playerNum) => (state.winner = playerNum)
  },
  actions: {
    endTurn: ({ commit, getters }, position) => {
      const param = {
        lastMove: position,
        board: getters["board/board"],
        player: getters["player/curr"],
        gridSize: getters["board/dim"].grid
      };
      if (param.board[position] < 0) {
        commit("board/updateBoard", {
          position,
          player: param.player
        });
        commit("updateLastMove", position);
        if (checkMove(param)) {
          commit("updateWinner", param.player);
          alert(`${param.player} wins!`);
        } else {
          commit("player/toggleCurr");
        }
      }
    }
  }
});
