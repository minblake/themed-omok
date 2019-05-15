import { SET_NAME, SET_PIECE, TOGGLE_CURR } from "../../mutation-types";

export default {
  namespaced: true,
  state: {
    players: [{ name: "Player 1", piece: 2 }, { name: "Player 2", piece: 3 }],
    curr: 0
  },
  getters: {
    getCurr: state => {
      return state.curr;
    },
    getCurrInfo: state => {
      return state.players[state.curr];
    },
    getInfo: state => {
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
