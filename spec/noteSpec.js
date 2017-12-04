function testNotesModelHasText() {
  var note = new Notes('Hello World!');
  assert.isEqualTo(note.text, 'Hello World!');
};
testNotesModelHasText();
