//* code that is responsible for creating the journal entry HTML component

  //* create a representation of the data
  const createJournalEntryComponent = (date, concept, content, mood) => {
    return `<div class="journalEntry">
              <h2>${date}</h2>
              <section>Concepts Covered: ${concept}</section>
              <section>${content}</section>
              <section>${mood}</section>
          </div>`;
  };




