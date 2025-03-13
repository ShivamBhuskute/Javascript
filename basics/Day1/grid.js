const rows = 3;
const cols = 3;

const grid = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => `${row},${col}`)
);

console.log(grid);
