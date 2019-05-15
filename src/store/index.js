import Vue from "vue";
import Vuex from "vuex";
import game from "./modules/game/";
import theme from "./modules/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    game
  }
});
