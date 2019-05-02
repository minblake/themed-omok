import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gridSize: 15,
    intersectionSize: "30px",
    pieces: Array(225).fill(""),
    theme: "maplestory",
    playerOnePiece: "slime.png",
    playerTwoPiece: "mushroom.png",
    isCurrPlayerOne: true,
    lastMove: -1
  },
  getters: {
    getNumIntersections: state => {
      return state.gridSize * state.gridSize;
    },
    getPieceUrl: state => name => {
      if (name) {
        return require(`@/assets/img/${state.theme}/${name}`);
      }
    },
    getCurrPlayer: state => {
      if (state.isCurrPlayerOne) {
        return {
          name: "Player 1",
          piece: state.playerOnePiece
        };
      } else {
        return {
          name: "Player 2",
          piece: state.playerTwoPiece
        };
      }
    }
  },
  mutations: {
    updatePieces: (state, position) => {
      state.isCurrPlayerOne
        ? state.pieces.splice(position, 1, state.playerOnePiece)
        : state.pieces.splice(position, 1, state.playerTwoPiece);
    },
    updateCurrPlayer: state => {
      state.isCurrPlayerOne = !state.isCurrPlayerOne;
    },
    updateLastMove: (state, position) => {
      state.lastMove = position;
    }
  },
  actions: {}
});
