function testNotesModelHasText() {
  var note = new Note('Hello World!');
  assert.isEqualTo(note.text, 'Hello World!');
};
testNotesModelHasText();

(function testSeeTextFunction() {
  var note = new Note('Hi Marco!')
  assert.isEqualTo(note.seeText(), 'Hi Marco!')
})();
