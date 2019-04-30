import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gridSize: 15,
    intersectionSize: "30px",
    pieces: Array(225).fill("")
  },
  getters: {
    numIntersections({ gridSize }) {
      return gridSize * gridSize;
    }
  },
  mutations: {
    placePiece({ pieces }, position) {
      pieces.splice(position, 1, "O");
    }
  },
  actions: {}
});
