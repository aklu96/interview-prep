/**
 * 489
 * didn't complete but close
 * concept: backtracking
 *
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */

/*
We have a class Robot
can move, turn left or right 90 degrees, and clean current cell

information about grid: if we can't move into a cell, move will return false

Each cell as a vertex in a graph
Each cell has 4 neighbors / edges

I: an instance of a robot API
O: none; side effect of all rooms cleaned
C: all cells can be visited; look to optimize for time and space
E: avoid looping

move forward as base case
if obstacle is encountered:
- turn until uncleaned space is ahead
- if none, turn until visited path
    - recursively continue moving forward

backtracking solution:

recursive(cell) {
Mark as cleaned
Examine 4 options
If option is not an obstacle and hasn’t been visited, recursive(newCell)
goBack()
}

we have to make consistent 90 degree turns and examine each path for this to work
(not provably sure why but keep this instinct in mind.for similar type problems)

*/

const goBack = () => {
  robot.turnRight();
  robot.turnRight();
  robot.move();
  // we want the robot to end up facing the same direction once it's moved back all the way
  // to continue the iteration
  robot.turnRight();
  robot.turnRight();
};

const clean = (robot, coordStr, dir, cleaned, directions) => {
  const coords = coordStr.split(',');
  // clean and mark current cell as cleaned in memo
  robot.clean();
  cleaned[coordStr] = true;
  // iterate through 4 options
  for (let i = 0; i < 4; i++) {
      // get the coords of the option
      const move = directions[dir];
      const optionCoords = [coords[0] + move[0], coords[1] + move[1]].join(',');
      // for any cell that hasn't been visited and isn't an obstacle
      if (!cleaned[optionCoords] && robot.move()) {
           // recurse into that cell
          clean(robot, optionCoords, dir, cleaned, directions);
          // move back to previous position facing the same way
          goBack();
      }
      // turn right for next iteration and update vars
      robot.turnRight();
      dir++;
      if (dir === 4) dir = 0;
  }
  // loop will end automatically once all cells have cleaned
}

const cleanRoom = (robot) => {
  // init memo; use a hashmap since we don't know how big the matrix is
  const cleaned = {};
  // imagine we start at 0,0 and it will be relative
  // directions mapping
  // 0 - 4: up, left, down, right
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  // start facing direction up
  let dir = 0;

  // backtracking
  clean(robot, '0,0', dir, cleaned, directions);
};