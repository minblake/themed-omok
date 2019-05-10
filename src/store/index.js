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
    updateLastMove: (state, i) => (state.lastMove = i),
    updateWinner: (state, i) => (state.winner = i)
  },
  actions: {
    endTurn: ({ commit, getters }, i) => {
      const param = {
        lastMove: i,
        board: getters["board/board"],
        player: getters["player/curr"],
        gridSize: getters["board/dim"].grid
      };
      if (param.board[i] < 0) {
        commit("board/updateBoard", {
          i: i,
          player: param.player
        });
        commit("updateLastMove", i);
        if (checkMove(param)) {
          alert(`${param.player} wins!`);
          commit("updateWinner", param.player);
        }
        commit("player/toggleCurr");
      }
    }
  }
});
