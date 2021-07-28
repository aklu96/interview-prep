/*
I: matrix
O: array
C: listed
E: min of 1 element for row/col; not rectangular

move right, push to result array until you hit the edge (undefined)
  var right = 4
  when hit, iterate right to 3

 toggle to move downwards
 t 1, b 0, l 0, r 0

 [[1, 2],
  [3, 4]]

  [[1, 2, 3]]

  [[1],
   [2],
   [3]]

*/

function spiralCopy(matrix) {
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  let dir = 'right';
  let coords = [0, 0];

  const result = [];

  while (top <= bottom && right >= left) {

    // based on dir
    if (dir === 'right') {
      while (coords[1] <= right) {
        result.push(matrix[coords[0]][coords[1]]);
        coords[1]++;
      }
      coords[1]--;
      coords[0]++;
      top++;
      dir = 'down';
      continue;
    }

    if (dir === 'down') {
      while (coords[0] <= bottom) {
        result.push(matrix[coords[0]][coords[1]]);
        coords[0]++;
      }
      coords[0]--;
      coords[1]--;
      right--;
      dir = 'left';
      continue;
    }

    if (dir === 'left') {
      while (coords[1] >= left) {
        result.push(matrix[coords[0]][coords[1]]);
        coords[1]--;
      }
      coords[1]++;
      coords[0]--;
      bottom--;
      dir = 'up';
      continue;
    }

    if (dir === 'up') {
      while (coords[0] >= top) {
        result.push(matrix[coords[0]][coords[1]]);
        coords[0]--;
      }
      coords[0]++;
      coords[1]++;
      left++;
      console.log(top, coords);
      dir = 'right';
      continue;
    }

  }
  return result;
}

console.log(spiralCopy([[1, 2, 3, 4]]));
console.log(spiralCopy([ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]));