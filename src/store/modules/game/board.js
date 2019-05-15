import { UPDATE_PIECE, PLACE_PIECE } from "../../mutation-types";

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
    [PLACE_PIECE]: (state, payload) => {
      state.board.splice(payload.position, 1, payload.piece);
    },
    [UPDATE_PIECE]: (state, payload) => {
      state.board = state.board.map(x =>
        x == payload.oldPiece ? (x = payload.newPiece) : x
      );
    }
  },
  actions: {
    placePiece: ({ commit }, payload) => {
      commit(PLACE_PIECE, payload);
    },
    updatePiece: ({ commit }, payload) => {
      commit(UPDATE_PIECE, payload);
    }
  }
};
