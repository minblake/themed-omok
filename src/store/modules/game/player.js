import { SET_NAME, SET_PIECE } from "../../mutation-types";

export default {
  namespaced: true,
  state: {
    players: [{ name: "Player 1", piece: 0 }, { name: "Player 2", piece: 1 }]
  },
  getters: {
    getPlayer: state => {
      return i => state.players[i];
    },
    getPiecesInUse: state => {
      return [state.players[0].piece, state.players[1].piece];
    }
  },
  mutations: {
    [SET_NAME]: (state, { i, name }) => {
      state.players[i].name = name;
    },
    [SET_PIECE]: (state, { i, piece }) => {
      state.players[i].piece = piece;
    }
  },
  actions: {
    setName: ({ commit }, payload) => {
      commit(SET_NAME, payload);
    },
    setPiece: ({ commit }, payload) => {
      commit(SET_PIECE, payload);
    }
  }
};
