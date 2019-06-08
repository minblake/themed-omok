import Vue from "vue";
import Vuex from "vuex";
import board from "./modules/board";
import player from "./modules/player";
import theme from "./modules/theme";
import * as checkWin from "../helpers/checkWinHelper";
import {
  TOGGLE_CURR_PLAYER,
  SET_LAST_MOVE,
  SET_WINNING_MOVES,
  SET_HAS_WINNER,
  RESET_GAME_STATE
} from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    board,
    player,
    theme
  },
  state: {
    lastMove: -1,
    winningMoves: [],
    hasWinner: false,
    currPlayerIndex: 0
  },
  getters: {
    getCurrPlayerIndex: state => {
      return state.currPlayerIndex;
    },
    getCurrPlayerInfo: (state, getters, rootState, rootGetters) => {
      const playerInfo = getters["player/getPlayer"](state.currPlayerIndex);
      return {
        name: playerInfo.name,
        piece: playerInfo.piece,
        pieceUrl: rootGetters["theme/getPiece"](playerInfo.piece)
      };
    },
    getLastMove: state => {
      return state.lastMove;
    },
    getWinningMoves: state => {
      return state.winningMoves;
    },
    getHasWinner: state => {
      return state.hasWinner;
    }
  },
  mutations: {
    [TOGGLE_CURR_PLAYER]: state => {
      state.currPlayerIndex = (state.currPlayerIndex + 1) % 2;
    },
    [SET_LAST_MOVE]: (state, move) => {
      state.lastMove = move;
    },
    [SET_WINNING_MOVES]: (state, moves) => {
      state.winningMoves = moves;
    },
    [SET_HAS_WINNER]: (state, val) => {
      state.hasWinner = val;
    },
    [RESET_GAME_STATE]: state => {
      state.lastMove = -1;
      state.winningMoves = [];
      state.hasWinner = false;
      state.currPlayerIndex = 0;
    }
  },
  actions: {
    endTurn: ({ dispatch, commit, getters }, position) => {
      const currPlayerInfo = getters["getCurrPlayerInfo"];

      const param = {
        lastMove: position,
        piece: currPlayerInfo.piece,
        board: getters["board/getBoard"],
        gridSize: getters["board/getDim"].grid
      };

      if (param.board[position] < 0) {
        dispatch("board/placePiece", {
          position,
          piece: currPlayerInfo.piece
        });

        commit(SET_LAST_MOVE, position);

        const moves = checkWin.getWinningMoves(param);
        if (moves) {
          commit(SET_HAS_WINNER, true);
          commit(SET_WINNING_MOVES, moves);
        } else {
          commit(TOGGLE_CURR_PLAYER);
        }
      }
    },
    changePiece: ({ dispatch }, payload) => {
      dispatch("board/updatePiece", payload);
      dispatch("player/setPiece", {
        i: payload.player,
        piece: payload.newPiece
      });
    },
    resetGame: ({ dispatch, commit }) => {
      commit(RESET_GAME_STATE);
      dispatch("board/resetBoard");
    }
  }
});
