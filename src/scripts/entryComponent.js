//* code that is responsible for creating the journal entry HTML component

  //* create a representation of the data
  const createJournalEntryComponent = (date, concept, contents, mood) => {
    return `<div class="journalEntry">
              <h2>${date}</h2>
              <section>Concepts Covered: ${concept}</section>
              <section>${contents}</section>
              <section>${mood}</section>
          </div>`;
  };




