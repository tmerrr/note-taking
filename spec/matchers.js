var assert = {
  isEqualTo: function(val1, val2) {
    if (val1 !== val2) {
      throw new Error(`${val1} is not equal to ${val2}`);
    } else {
      console.log(`${val1} is equal to ${val2}`)
    }
  },

  isObjectType: function(object, objectType) {
    if (object instanceof objectType) {
      console.log(`${typeof(object)} is a type of ${objectType.name}`)
    } else {
      throw new Error(`${typeof(object)} is not a type of ${objectType.name}`)
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

// arrayContainsObjectType: function(array, object) {
//   if (array.includes(object.constructor)) {
//     console.log(`Array contain ${object.constructor}`)
//   } else {
//     throw new Error(`Array do not contain ${object.constructor}`)
//   }
// }

// arrayContainsObjectType: function(array, object) {
//   if (array.last.constructor === object.constructor) {
//     console.log(`Array contain ${object.constructor}`)
//   } else {
//     throw new Error(`Array do not contain ${object.constructor}`)
//   }
// }
