

  //* invoke the function
  //* inject the HTML into the DOM
  getJournalEntries().then(journalEntries => {
    // console.table(journalEntries);
    journalEntries.forEach(journalEntry => {
        const htmlRepresentation = createJournalEntryComponent(
          journalEntry.date,
          journalEntry.concept,
          journalEntry.content,
          journalEntry.mood
        );
        whereToDisplayTheJournalEntriesInTheDOM.innerHTML += htmlRepresentation;
      });
  });
//* event listener on submit button, capturing submitted data in a const
let newJournalEntry = ""
document.querySelector("#journalSubmit").addEventListener("click", event => {
  //* Capture the new journal entry with a factory function and save them to an array
  const date = document.querySelector("#journalDate");
  const concept = document.querySelector("#journalConcept");
  const content = document.querySelector("#journalEntry");
  const mood = document.querySelector("#journalMood");
  
  newJournalEntry = {
    date: date.value,
    concept: concept.value,
    content: content.value,
    mood: mood.value, 
  }
  
  // todo Display the new journal entry in the DOM
  saveJournalEntry(newJournalEntry)
  .then (() => {
    entries.push({date, concept, content, mood})
  })
// todo render entries to DOM
})