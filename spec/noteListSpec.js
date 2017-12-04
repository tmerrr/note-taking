function testNoteListModelHasAnArrayForNotes() {
  var noteList = new NoteList();
  assert.isSameObjectType(noteList.allNotes, []);
};

testNoteListModelHasAnArrayForNotes();

function testPushingToAllNotes() {
  var noteList = new NoteList();
  var note = 'note double';
  noteList.addNote(note);
  assert.arrayContains(noteList.allNotes, note);
}

testPushingToAllNotes();
