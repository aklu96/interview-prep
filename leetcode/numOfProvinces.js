/**
 * 547
 *
 * @param {number[][]} isConnected
 * @return {number}

 BFS vs DFS mention!
 very methodical


    1 2 3
 1 [1,1,0]
 2 [1,1,0]
 3 [0,0,1]

 I: matrix n x n
 O: number of provinces
 C: listed
 E: none

 high level: iterate through each city and recursively call on connections
 mark as touched
 iterate province counter

 matrix:
 iterate through rows for each "city"
 for each city/row, iterate through its connections array
 recursively call on connections
 store hashmap for touched

 O(N^2) time
 O(N) space

 */

// might need adn info
/*
 {
    0: true,
    1: true,
    2: false
 }
*/
const findConnections = (city, isConnected, touched) => {
    // iterate through city's connections array
    // for each that hasn't been touched, call recursively
    // mark as touched
    // city = 0, cons = [1, 0, 0]
    // city = 1, cons = [0, 1, 1]
    // city = 2, cons = [0, 1, 1]
    touched[city] = true;
    const cons = isConnected[city];
    for (let i = 0; i < cons.length; i++) {
        if (cons[i] === 1 && !touched[i]) {
            findConnections(i, isConnected, touched);
        }
    }
};

const findCircleNum = (isConnected) => {
    let provs = 0;
    let touched = {};
    for (let i = 0; i < isConnected.length; i++) {
        touched[i] = false;
    }

    // iterate through rows
    for (let i = 0; i < isConnected.length; i++) {
        if (!touched[i]) {
            provs++;
            findConnections(i, isConnected, touched);
        }
    }

    return provs;
};
