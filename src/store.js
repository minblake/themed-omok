import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gridSize: 15,
    intersectionSize: "30px",
    pieces: Array(225).fill(""),
    theme: "maplestory",
    playerOne: {
      name: "Player 1",
      piece: "slime.png"
    },
    playerTwo: {
      name: "Player 2",
      piece: "mushroom.png"
    },
    isCurrPlayerOne: true,
    lastMove: -1
  },
  getters: {
    getNumIntersections: state => {
      return state.gridSize * state.gridSize;
    },
    getPieceUrl: state => piece => {
      if (piece) {
        return require(`@/assets/img/${state.theme}/${piece}`);
      }
    },
    getCurrPlayer: state => {
      if (state.isCurrPlayerOne) {
        return state.playerOne;
      } else {
        return state.playerTwo;
      }
    }
  },
  mutations: {
    updatePieces: (state, position) => {
      state.isCurrPlayerOne
        ? state.pieces.splice(position, 1, state.playerOne.piece)
        : state.pieces.splice(position, 1, state.playerTwo.piece);
    },
    toggleCurrPlayer: state => {
      state.isCurrPlayerOne = !state.isCurrPlayerOne;
    },
    updateLastMove: (state, position) => {
      state.lastMove = position;
    }
  },
  actions: {}
});
