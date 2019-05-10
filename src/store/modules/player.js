export default {
  namespaced: true,
  state: {
    players: [{ name: "Player 1", piece: 0 }, { name: "Player 2", piece: 1 }],
    curr: 0
  },
  getters: {
    curr: state => state.curr,
    currInfo: state => state.players[state.curr],
    pieceUrl: (state, getters, rootState, rootGetters) => i => {
      const theme = rootGetters["theme/curr"];
      const playerPiece = state.players[i].piece;
      return require(`@/assets/img/${theme.name}/${theme.pieces[playerPiece]}`);
    }
  },
  mutations: {
    // TO-DO
    updatePiece: (state, payload) =>
      (state.players[payload.player].piece = payload.piece),
    toggleCurr: state => (state.curr = (state.curr + 1) % 2) // 0 or 1
  }
};
