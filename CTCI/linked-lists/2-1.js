/*
Remove duplicates from an unsorted linked list
I'll assume access to the head of the list

I: Head node of a linked list
O: no output, we just have a side effect: remove all duplicates
C: optimize space and time
E: only one node

Strategies:
BF:
Recursively iterate through list, push values into array/object O(n)
At every iteration, compare value to all existing values
  At each step: 1 + 2 + ... + n -> n/2 -> sum is n(n+1)/2, average is(n+1)/2, either way total comes out to O(n^2)
  If duplicate, remove the node (i.e. update pointers) O(1)

Time: O(n)
Space: O(n)

Alternative: instead of creating an array, we have a second pointer that at every iteration, cycles backwards through the list to check for that value. If implemented recursively, this would still be O(n) space because of the call stack, however we could implement it with a for loop.

Well actually the difference between an object and array matters here. If we use an object (hash table), we simply add the value in as a key. Then it's an O(1) operation to search for that key, so total is O(n).