import { UPDATE_BOARD } from "../../mutation-types";

export default {
  namespaced: true,
  state: {
    dim: { grid: 15, intersection: 30 },
    board: Array(225).fill(-1)
  },
  getters: {
    getDim: state => {
      return state.dim;
    },
    getBoard: state => {
      return state.board;
    },
    getBoardSize: state => {
      return state.board.length;
    }
  },
  mutations: {
    [UPDATE_BOARD]: (state, payload) => {
      state.board.splice(payload.position, 1, payload.piece);
    }
  },
  actions: {
    updateBoard: ({ commit }, payload) => {
      commit(UPDATE_BOARD, payload);
    }
  }
};
