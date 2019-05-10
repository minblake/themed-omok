export default {
  namespaced: true,
  state: {
    themes: [
      {
        name: "maplestory",
        pieces: ["slime.png", "mushroom.png", "pig.png", "bloctopus.png"]
      }
    ],
    curr: 0
  },
  getters: {
    curr: state => state.themes[state.curr],
    currName: state => state.themes[state.curr].name,
    currPieces: state => state.themes[state.curr].pieces
  },
  mutation: {}
};
