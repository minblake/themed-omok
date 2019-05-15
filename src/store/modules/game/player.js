import { SET_NAME, SET_PIECE, TOGGLE_CURR } from "../../mutation-types";

export default {
  namespaced: true,
  state: {
    players: [{ name: "Player 1", piece: 0 }, { name: "Player 2", piece: 1 }],
    curr: 0
  },
  getters: {
    getCurr: state => {
      return state.curr;
    },
    getCurrInfo: state => {
      return state.players[state.curr];
    },
    getName: state => {
      return i => state.players[i].name;
    },
    getPiece: state => {
      return i => state.players[i].piece;
    }
  },
  mutations: {
    [SET_NAME]: (state, { i, name }) => {
      state.players[i].name = name;
    },
    [SET_PIECE]: (state, { i, piece }) => {
      state.players[i].piece = piece;
    },
    [TOGGLE_CURR]: state => {
      state.curr = (state.curr + 1) % 2;
    }
  },
  actions: {
    toggleCurr: ({ commit }) => {
      commit(TOGGLE_CURR);
    },
    setName: ({ commit }, payload) => {
      commit(SET_NAME, payload);
    },
    setPiece: ({ commit }, payload) => {
      commit(SET_PIECE, payload);
    }
  }
};
