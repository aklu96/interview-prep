// assume helper hash function that changes input value
// to a number between 0 and max - 1
const hash = (key, max) => {
  let index;
  // hashing magic
  return index;
};

class hashTable {
  constructor() {
    this.array = [0, 0, 0, 0];
  }
  insert(key, value) {
    // const index = hash(key, hashTable.array);
    const index = Math.floor(Math.random() * this.array.length);
    this.array[index] = {
      [key]: value,
      next: null;
    };
  }
  lookup() {}
  resize() {}
}

const test = new hashTable;

console.log(test);
