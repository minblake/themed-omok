const findRow = (i, numRows) => Math.floor(i / numRows);

const findCol = (i, numCols) => i % numCols;

const getConsecPieces = (lastMove, min, max, step, piece, board) => {
  let i;
  const consecPieces = [];

  consecPieces.push(lastMove);
  for (
    i = lastMove - step;
    i >= min && consecPieces.length < 5 && piece == board[i];
    i -= step
  ) {
    consecPieces.push(i);
  }

  for (
    i = lastMove + step;
    i <= max && consecPieces.length < 5 && piece == board[i];
    i += step
  ) {
    consecPieces.push(i);
  }

  return consecPieces;
};

const getHorizontal = ({ lastMove, piece, board, gridSize }) => {
  const row = findRow(lastMove, gridSize);
  const min = Math.max(row * gridSize, lastMove - 4);
  const max = Math.min((row + 1) * gridSize - 1, lastMove + 4);
  const step = 1;
  const pieces = getConsecPieces(lastMove, min, max, step, piece, board);

  return pieces.length == 5 ? pieces : null;
};

const getVertical = ({ lastMove, piece, board, gridSize }) => {
  const col = findCol(lastMove, gridSize);
  const min = Math.max(col, lastMove - gridSize * 4);
  const max = Math.min(
    col + gridSize * (gridSize - 1),
    lastMove + gridSize * 4
  );
  const step = gridSize;
  const pieces = getConsecPieces(lastMove, min, max, step, piece, board);

  return pieces.length == 5 ? pieces : null;
};

const getLeftDiagonal = ({ lastMove, piece, board, gridSize }) => {
  const row = findRow(lastMove, gridSize);
  const col = findCol(lastMove, gridSize);

  let minDiag, maxDiag;
  row < 4 || col < 4 ? (minDiag = Math.min(row, col)) : (minDiag = 4);
  row > gridSize - 4 || col > gridSize - 4
    ? (maxDiag = Math.min(gridSize - 1 - row, gridSize - 1 - col))
    : (maxDiag = 4);

  const min = (row - minDiag) * gridSize + (col - minDiag);
  const max = (row + maxDiag) * gridSize + (col + maxDiag);
  const step = gridSize + 1;

  const pieces = getConsecPieces(lastMove, min, max, step, piece, board);

  return pieces.length == 5 ? pieces : null;
};

const getRightDiagonal = ({ lastMove, piece, board, gridSize }) => {
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
  const step = gridSize - 1;

  const pieces = getConsecPieces(lastMove, min, max, step, piece, board);

  return pieces.length == 5 ? pieces : null;
};

export const getWinningMoves = param => {
  return (
    getHorizontal(param) ||
    getVertical(param) ||
    getLeftDiagonal(param) ||
    getRightDiagonal(param)
  );
};
