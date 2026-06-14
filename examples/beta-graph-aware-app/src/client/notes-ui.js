function renderNotes(notes) {
  return notes.map((note) => `${note.id}: ${note.title}`).join("\n");
}

module.exports = { renderNotes };
