var assert = {
  isEqualTo: function(val1, val2) {
    if (val1 !== val2) {
      throw new Error(`${val1} is not equal to ${val2}`);
    } else {
      console.log(`${val1} is equal to ${val2}`)
    }
  }
}
