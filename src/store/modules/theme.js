import { SET_CURR_THEME } from "../mutation-types";

export default {
  namespaced: true,
  state: {
    themes: [
      {
        name: "Maplestory",
        pieces: [
          require("@/assets/themes/maplestory/pieces/slime.png"),
          require("@/assets/themes/maplestory/pieces/mushroom.png"),
          require("@/assets/themes/maplestory/pieces/octopus.png"),
          require("@/assets/themes/maplestory/pieces/trixter.png"),
          require("@/assets/themes/maplestory/pieces/pig.png"),
          require("@/assets/themes/maplestory/pieces/bloctopus.png"),
          require("@/assets/themes/maplestory/pieces/panda_teddy.png")
        ]
      },
      {
        name: "Pokemon",
        pieces: [
          require("@/assets/themes/pokemon/pieces/pikachu.png"),
          require("@/assets/themes/pokemon/pieces/snorlax.png"),
          require("@/assets/themes/pokemon/pieces/zubat.png"),
          require("@/assets/themes/pokemon/pieces/pokeball.png"),
          require("@/assets/themes/pokemon/pieces/ultraball.png"),
          require("@/assets/themes/pokemon/pieces/egg.png")
        ]
      },
      {
        name: "Super Mario",
        pieces: [
          require("@/assets/themes/super_mario/pieces/mushroom_super.png"),
          require("@/assets/themes/super_mario/pieces/mushroom_1up.png"),
          require("@/assets/themes/super_mario/pieces/coin.png"),
          require("@/assets/themes/super_mario/pieces/boo.png"),
          require("@/assets/themes/super_mario/pieces/goomba.png"),
          require("@/assets/themes/super_mario/pieces/chain_chomp.png")
        ]
      }
    ],
    curr: 0
  },
  getters: {
    getCurr: state => {
      return state.curr;
    },
    getCurrTheme: state => {
      return state.themes[state.curr];
    },
    getCurrPieces: state => {
      return state.themes[state.curr].pieces;
    },
    getPiece: state => {
      return i => state.themes[state.curr].pieces[i];
    },
    getThemes: state => {
      return state.themes;
    }
  },
  mutations: {
    [SET_CURR_THEME]: (state, i) => {
      state.curr = i;
    }
  },
  actions: {
    setCurrTheme: ({ commit }, i) => {
      commit(SET_CURR_THEME, i);
    }
  }
};
