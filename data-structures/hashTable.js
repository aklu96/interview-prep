/*
Implement a hash table using an array

hash table purpose: be able to look up values in O(1) time.

The way this works: a hashing function maps values to indices that map to specific addresses in memory.
By virtue of how hashing functions work, the same value will always map to the same index.

Therefore, by putting a value through the same hashing function you can access the same place in memory in O(1) time.

You can store something in that place in memory, which allows for key-value pairs.

You put the key through the hashing function to map to the place in memory, and you store the value there as a result.

*/

class HashTable {
  constructor(size, resizeFactor) {
    this.size = size || 8;
    this.resizeFactor = resizeFactor || .25;
    this.storage = [];
  }

  hash(key) {
    return key.length % this.size;
  }

  insert(key, value) {
    // handle collisions
    // update keys that already exist
  }

  get(key) {
    // return value at that key
  }

  delete(key) {
    // delete k-v pair
  }

  resize() {
    // this function is called when some resize parameter is called
  }
}