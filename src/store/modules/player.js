export default {
  namespaced: true,
  state: {
    players: [{ name: "Player 1", piece: 0 }, { name: "Player 2", piece: 1 }],
    curr: 0
  },
  getters: {
    curr: state => state.curr,
    currInfo: state => state.players[state.curr],
    playerName: state => num => state.players[num].name,
    playerPiece: state => num => state.players[num].piece,
    pieceUrl: (state, getters, rootState, rootGetters) => num => {
      const theme = rootGetters["theme/curr"];
      const playerPiece = state.players[num].piece;
      return require(`@/assets/img/${theme.name}/${theme.pieces[playerPiece]}`);
    }
  },
  mutations: {
    // TO-DO
    updateName: (state, { num, name }) => (state.players[num].name = name),
    updatePiece: (state, { num, piece }) => (state.players[num].piece = piece),
    toggleCurr: state => (state.curr = (state.curr + 1) % 2) // 0 or 1
  },
  actions: {
    updatePlayerName: ({ commit }, payload) => {
      commit("updateName", payload);
    },
    updatePlayerPiece: ({ commit }, payload) => commit("updatePiece", payload)
  }
};
