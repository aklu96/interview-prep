/**
 * Recursive, top-down sol'n:
 * REMEMBER THE QUESTION - HOW DO WE GET TO THIS POINT?
 * WHAT ARE THE SUBPROBLEMS THAT NEED TO BE SOLVED TO GET HERE?
 *
 * Our problem is how do we get to coords [r, c]
 * Well we can get there from [r - 1, c] and [r, c - 1]
 * And we can build our tree backwards from that
 *
 */

const isAtOrigin = (coords) => {
  // you get the idea
}

const moveRobot = (coords) => {

  if (isAtOrigin() || moveRobot([r - 1, c]) || moveRobot([r, c - 1])) {
    return true;
  }
  return null;
};