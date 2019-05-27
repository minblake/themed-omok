import board from "./board";
import player from "./player";
import { getWinningMoves } from "./helper";
import {
  SET_LAST_MOVE,
  SET_WINNING_MOVES,
  SET_WINNER,
  TOGGLE_CURR_PLAYER
} from "../../mutation-types";

export default {
  namespaced: true,
  modules: {
    board,
    player
  },
  state: {
    lastMove: -1,
    winningMoves: [],
    winner: -1,
    currPlayer: 0
  },
  getters: {
    getCurrPlayer: state => {
      return state.currPlayer;
    },
    getCurrPlayerInfo: (state, getters, rootState, rootGetters) => {
      const playerInfo = getters["player/getPlayer"](state.currPlayer);
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
    getWinner: state => {
      return state.winner;
    }
  },
  mutations: {
    [TOGGLE_CURR_PLAYER]: state => {
      state.currPlayer = (state.currPlayer + 1) % 2;
    },
    [SET_LAST_MOVE]: (state, move) => {
      state.lastMove = move;
    },
    [SET_WINNING_MOVES]: (state, moves) => {
      state.winningMoves = moves;
    },
    [SET_WINNER]: (state, player) => {
      state.winner = player;
    }
  },
  actions: {
    endTurn: ({ dispatch, commit, state, getters }, position) => {
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

        const moves = getWinningMoves(param);
        if (moves) {
          commit(SET_WINNER, state.currPlayer);
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
    }
  }
};
