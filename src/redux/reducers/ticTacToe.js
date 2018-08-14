export default {
  namespace: "ticTacToe",

  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  }

  reducers: {
    handleClick(state, { payload: index }) {
      return { ...state, index };
    },

    jumpTo(state, { payload: step }) {
      return { ...state, step };
    }
  }
};
