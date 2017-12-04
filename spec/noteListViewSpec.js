function testHTMLIsReturned() {
  note = new Note('Hello world')
  string = "<ul><li> Hello world </li></ul>"
  result = convertToHTML(note.text);
  assert.isEqualTo(result, string);
}

testHTMLIsReturned();
