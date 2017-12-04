var assert = {
  isEqualTo: function(val1, val2) {
    if (val1 !== val2) {
      throw new Error(`${val1} is not equal to ${val2}`);
    } else {
      console.log(`${val1} is equal to ${val2}`)
    }
  },

  isSameObjectType: function(obj1, obj2) {
    if (obj1.constructor !== obj2.constructor) {
      throw new Error(`${obj1} is not the same object type as ${obj2}`)
    } else {
      console.log(`${obj1.constructor} is the same object type as ${obj2.constructor}`)
    }
  },

  arrayContains: function(array, value) {
    if (array.includes(value)) {
      console.log(`${value} is within Array`)
    } else {
      throw new Error(`${value} not found in Array`)
    }
  }
}
