function NoteList () {
  this.allNotes = []
}

NoteList.prototype = {
  addNote: function(note) {
    this.allNotes.push(note);
  }
}
