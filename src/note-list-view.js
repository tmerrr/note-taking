(function(exports) {
  function convertToHTML(noteText) {
    return `<ul><li> ${noteText} </li></ul>`
  }

  exports.convertToHTML = convertToHTML;
})(this);
