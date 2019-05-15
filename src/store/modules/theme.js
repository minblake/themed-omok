export default {
  namespaced: true,
  state: {
    themes: [
      {
        name: "maplestory",
        pieces: [
          require("@/assets/themes/maplestory/pieces/slime.png"),
          require("@/assets/themes/maplestory/pieces/mushroom.png"),
          require("@/assets/themes/maplestory/pieces/bloctopus.png"),
          require("@/assets/themes/maplestory/pieces/panda_teddy.png")
        ]
      }
    ],
    curr: 0
  },
  getters: {
    getCurr: state => {
      return state.themes[state.curr];
    },
    getCurrName: state => {
      return state.themes[state.curr].name;
    },
    getCurrPieces: state => {
      return state.themes[state.curr].pieces;
    },
    getPiece: state => {
      return i => state.themes[state.curr].pieces[i];
    }
  }
};
