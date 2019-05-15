const findRow = (i, numRows) => Math.floor(i / numRows);

const findCol = (i, numCols) => i % numCols;

const hasFiveConsecPieces = (start, min, max, step, piece, board) => {
  let i;
  let numConsecPieces = 0;

  for (
    i = start - step.dec;
    i >= min && numConsecPieces < 4 && piece == board[i];
    i -= step.dec
  ) {
    numConsecPieces++;
  }

  for (
    i = start + step.inc;
    i <= max && numConsecPieces < 4 && piece == board[i];
    i += step.inc
  ) {
    numConsecPieces++;
  }

  return numConsecPieces >= 4;
};

const checkHorizontal = ({ lastMove, piece, board, gridSize }) => {
  const row = findRow(lastMove, gridSize);
  const min = Math.max(row * gridSize, lastMove - 4);
  const max = Math.min((row + 1) * gridSize - 1, lastMove + 4);
  const step = { dec: 1, inc: 1 };

  return hasFiveConsecPieces(lastMove, min, max, step, piece, board);
};

const checkVertical = ({ lastMove, piece, board, gridSize }) => {
  const col = findCol(lastMove, gridSize);
  const min = Math.max(col, lastMove - gridSize * 4);
  const max = Math.min(
    col + gridSize * (gridSize - 1),
    lastMove + gridSize * 4
  );
  const step = { dec: gridSize, inc: gridSize };

  return hasFiveConsecPieces(lastMove, min, max, step, piece, board);
};

const checkLeftDiagonal = ({ lastMove, piece, board, gridSize }) => {
  const row = findRow(lastMove, gridSize);
  const col = findCol(lastMove, gridSize);

  let minDiag, maxDiag;
  row < 4 || col < 4 ? (minDiag = Math.min(row, col)) : (minDiag = 4);
  row > gridSize - 4 || col > gridSize - 4
    ? (maxDiag = Math.min(gridSize - 1 - row, gridSize - 1 - col))
    : (maxDiag = 4);

  const min = (row - minDiag) * gridSize + (col - minDiag);
  const max = (row + maxDiag) * gridSize + (col + maxDiag);
  const step = { dec: gridSize - 1, inc: gridSize + 1 };

  return hasFiveConsecPieces(lastMove, min, max, step, piece, board);
};

const checkRightDiagonal = ({ lastMove, piece, board, gridSize }) => {
  const row = findRow(lastMove, gridSize);
  const col = findCol(lastMove, gridSize);

  let minDiag, maxDiag;
  row < 4 || col > gridSize - 4
    ? (minDiag = Math.min(row, gridSize - 1 - col))
    : (minDiag = 4);
  row > gridSize - 4 || col < 4
    ? (maxDiag = Math.min(gridSize - 1 - row, col))
    : (maxDiag = 4);

  const min = (row - minDiag) * gridSize + (col + minDiag);
  const max = (row + maxDiag) * gridSize + (col - maxDiag);
  const step = { dec: gridSize + 1, inc: gridSize - 1 };

  return hasFiveConsecPieces(lastMove, min, max, step, piece, board);
};

export const checkMove = param => {
  return (
    checkHorizontal(param) ||
    checkVertical(param) ||
    checkLeftDiagonal(param) ||
    checkRightDiagonal(param)
  );
};
