function testNotesModelHasText() {
  var note = new Note('Hello World!');
  assert.isEqualTo(note.text, 'Hello World!');
};
testNotesModelHasText();
