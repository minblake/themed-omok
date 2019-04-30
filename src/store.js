import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gridSize: 15,
    intersectionSize: "25px"
  },
  getters: {
    numIntersections: ({ gridSize }) => gridSize * gridSize
  },
  mutations: {},
  actions: {}
});
