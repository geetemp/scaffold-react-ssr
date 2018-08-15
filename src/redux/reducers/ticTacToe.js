export default {
  namespace: "ticTacToe",

  state: {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  },

  actions: {},

  reducers: {
    handleClick(state, { payload: index }) {
      const history = state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      // eslint-disable-next-line
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = state.xIsNext ? "X" : "O";
      return {
        ...state,
        history: history.concat([
          {
            squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      };
    },

    jumpTo(state, { payload: step }) {
      return { ...state, step };
    }
  }
};
