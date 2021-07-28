/*
 20

 Correct solution is using a stack
 you can always open brackets, but to close should match the current open one
 (or handle case where you try to close before any are open)

 if you're closing a bracket, should match open bracket at top of stack
 if not, return false
 if true, pop from stack and move on
 at end, stack should be empty

*/

// O(N) time and O(N) space
const isValid = (s) => {
    const openers = ['[', '{', '('];
    const closers = [']', '}', ')'];
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (openers.includes(s[i])) {
            stack.push(s[i]);
            continue;
        }
        let char = stack[stack.length - 1];
        if (!char) {
            return false;
        }
        if (char === '[' && s[i] !== ']') {
            return false;
        }
        if (char === '{' && s[i] !== '}') {
            return false;
        }
        if (char === '(' && s[i] !== ')') {
            return false;
        }
        stack.pop();
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};