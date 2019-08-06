

  //* invoke the function
  //* inject the HTML into the DOM
  getJournalEntries().then(journalEntries => {
    // console.table(journalEntries);
    journalEntries.forEach(journalEntry => {
        const htmlRepresentation = createJournalEntryComponent(
          journalEntry.date,
          journalEntry.concept,
          journalEntry.contents,
          journalEntry.mood
        );
        whereToDisplayTheJournalEntriesInTheDOM.innerHTML += htmlRepresentation;
      });
  });

  document.querySelector("#journalSubmit").addEventListener("click", event => {
    // todo Capture the new journal entry and save them to an array
    const date = document.querySelector("#journalDate");
    const concept = document.querySelector("#journalConcept");
    const content = document.querySelector("#journalEntry");
    const mood = document.querySelector("#journalMood");
    
    const newJournalEntry = {
      date: date.value,
      concept: concept.value,
      content: content.value,
      mood: mood.value, 
    }
    // console.log(newJournalEntry)
  })
// todo this is what is next
// todo POST the journal entry into entries.json


// todo Display the new journal entry in the DOM


