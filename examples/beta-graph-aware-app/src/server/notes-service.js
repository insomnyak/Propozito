function createNoteStore() {
  const notes = [];
  return {
    add(title) {
      const trimmed = String(title || "").trim();
      if (!trimmed) throw new Error("Note title is required.");
      const note = { id: `note-${notes.length + 1}`, title: trimmed };
      notes.push(note);
      return note;
    },
    list() {
      return notes.map((note) => ({ ...note }));
    }
  };
}

module.exports = { createNoteStore };
