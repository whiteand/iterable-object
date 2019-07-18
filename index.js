module.exports = {
  entries: {
    [Symbol.iterator]: function() {
      return Object.entries(this)[Symbol.iterator]();
    }
  },
  values: {
    [Symbol.iterator]: function() {
      return Object.values(this)[Symbol.iterator]();
    }
  },
  keys: {
    [Symbol.iterator]: function() {
      return Object.keys(this)[Symbol.iterator]();
    }
  }
};
