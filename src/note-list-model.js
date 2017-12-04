function NoteList () {
  this.allNotes = []
}

NoteList.prototype = {
  addNote: function(string) {
    note = new Note(string);
    this.allNotes.push(note);
  }
}
