function Note(string) {
  this.text = string
}

Note.prototype = {
  seeText: function() {
    return this.text;
  }
}
