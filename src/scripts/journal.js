getJournalEntries().then(renderToDOM)

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
  //* Display the new journal entry in the DOM
  saveJournalEntry(newJournalEntry)
  .then (() => {
    entries.push({date, concept, content, mood})
  })
  
});
//------------------radio button section-------------------------------
const radioButtons = document.getElementsByName("radioButton")
radioButtons.forEach(button => {
  button.addEventListener("click", event => {
    const mood = event.target.id
    document.querySelector("#journalContainer").innerHTML = ""
    getJournalEntries().then(journalEntries => {
      journalEntries.filter(entry => {
        if (entry.mood === mood) {
          const htmlRepresentation = createJournalEntryComponent(
            entry.date,
            entry.concept,
            entry.content,
            entry.mood
          );
          whereToDisplayTheJournalEntriesInTheDOM.innerHTML += htmlRepresentation;
        }
      });
    })
  });
});
// ---------------------end Radio Button---------------------------------
// ---------------------begin Delete-------------------------------------


const deleteButton = document.querySelector("#journalContainer")
 
deleteButton.addEventListener("click", event => {
  if (event.target.id.startsWith("journalDelete--")){
    const JournalEntryToDelete = event.target.id.split("--")[1];
    console.log('JournalEntryToDelete: ', JournalEntryToDelete);
    document.querySelector("#journalContainer").innerHTML = ""
    deleteEntry(JournalEntryToDelete)

    .then(getJournalEntries()).then(renderToDOM)
    console.log("after delete")
    console.log("after the empty string")
    
    
    }
})




