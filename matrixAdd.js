// takes 2, 2 dimensional arrays and adds them together.

function matrixAdd(arr1, arr2) {
    let sum = [];
    for (let i = 0; i < arr1.length; i++) {
        let temp = []
        for (let j = 0; j <arr1[i].length;j++ ) {
            temp.push(arr1[i][j] + arr2[i][j])
        }
        sum.push(temp);
    }
    return sum;
}
let a = [[1, 2], [11, 6]];
let b = [[4, 6], [25,5]];
console.log(matrixAdd(a, b));
console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]))