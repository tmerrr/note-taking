function testNoteListModelHasAnArrayForNotes() {
  var noteList = new NoteList();
  assert.isObjectType(noteList.allNotes, Array);
};

testNoteListModelHasAnArrayForNotes();

function testNoteHasBeenPushed() {
  var noteList = new NoteList();
  noteList.addNote("Hello World!");
  assert.isObjectType(noteList.allNotes[0], Note);
  assert.isEqualTo(noteList.allNotes[0].text, "Hello World!")
}

testNoteHasBeenPushed();
