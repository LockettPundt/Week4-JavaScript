// the function takes a 3 dimensional array and returns which letter, if any created a tic-tac-toe.
function ticTacToe(arr) {
    let result;
    const row = (x) => {
        if (arr[x][0] === arr[x][1] && arr[x][1] === arr[x][2]) {
            result = arr[x][0];
        } 
    }
    const col = (y) => {
        if (arr[0][y] === arr[1][y] && arr[1][y] === arr[2][y]) {
            result = arr[0][y];
        }

    }
    const diagonal = function() {
        if (arr[0][0] === arr[1][1] && arr[2][2] === arr[1][1]) {
            result = arr[0][0];
        }
        if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
            result = arr[2][0];
        }
    }
    row(0);
    row(1);
    row(2);
    col(0);
    col(1);
    col(2);
    diagonal();
    if (result === undefined) {
        return result = null;
    } else {
        return result;
    }

}
let a = [
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ];
const b = [
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ];
const c = [
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ];
console.log(ticTacToe(a));
console.log(ticTacToe(b));
console.log(ticTacToe(c));