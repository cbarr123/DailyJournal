//* code that is responsible for creating the journal entry HTML component

  //* create a representation of the data
const createJournalEntryComponent = (object) => {
  return `<div class="journalEntry--${object.id}">
            <h2>${object.date}</h2>
            <section>Concepts Covered: ${object.concept} ID for testing:${object.id}</section>
            <section>${object.content}</section>
            <section>${object.mood}</section>
            <button id="journalDelete--${object.id}">Delete Journal Entry</button>
            <button id="journalEdit--${object.id}">Edit Journal Entry</button>
        </div>`;     
};






