import board from "./board";
import player from "./player";
import { checkMove } from "./helper";
import { SET_LAST_MOVE, SET_WINNER } from "../../mutation-types";

export default {
  namespaced: true,
  modules: {
    board,
    player
  },
  state: {
    lastMove: -1,
    winner: -1
  },
  getters: {
    getLastMove: state => {
      return state.lastMove;
    },
    getWinner: state => {
      return state.winner;
    }
  },
  mutations: {
    [SET_LAST_MOVE]: (state, move) => {
      state.lastMove = move;
    },
    [SET_WINNER]: (state, player) => {
      state.winner = player;
    }
  },
  actions: {
    endTurn: ({ dispatch, commit, getters }, position) => {
      const currPlayerInfo = getters["player/getCurrInfo"];

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

        if (checkMove(param)) {
          commit(SET_WINNER, param.player);
          alert(`${currPlayerInfo.name} wins!`);
        } else {
          dispatch("player/toggleCurr");
        }
      }
    },
    changePiece: ({ dispatch }, payload) => {
      dispatch("board/updatePiece", payload);
      dispatch("player/setPiece", {
        i: payload.player,
        piece: payload.newPiece
      });
    }
  }
};
