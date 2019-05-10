export default {
  namespaced: true,
  state: {
    dim: { grid: 15, intersection: 30 },
    board: Array(225).fill(-1)
  },
  getters: {
    dim: state => state.dim,
    board: state => state.board,
    boardSize: state => state.board.length
  },
  mutations: {
    updateBoard: (state, payload) =>
      state.board.splice(payload.i, 1, payload.player)
  }
};
