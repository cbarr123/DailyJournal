//* This line populates the DOM with existing journal entries
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
    // console.log('mood: ', mood);
    
    document.querySelector("#journalContainer").innerHTML = ""
    getJournalEntries().then(journalEntries => {
      // console.log(journalEntries)
      journalEntries.filter(object => {
        if (object.mood === mood) {
          const htmlRepresentation = createJournalEntryComponent(object);
          // console.log(htmlRepresentation)
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
    
    //* to clear the DOM
    document.querySelector("#journalContainer").innerHTML = ""
    //* to delete the entry
    deleteEntry(JournalEntryToDelete)
    
    getJournalEntries().then(renderToDOM)
    }
})






// ----------------------begin Edit---------------------------------
const editButton = document.querySelector("#journalContainer")


editButton.addEventListener("click", event => {
  if (event.target.id.startsWith("journalEdit--")){
    const JournalEntryToEdit = event.target.id.split("--")[1];
    console.log('JournalEntryToEdit: ', JournalEntryToEdit);
    
    retrieveEntry(JournalEntryToEdit)
    .then(journalEntry => {
      console.log(journalEntry)
    })
    const updateJournalFields = (JournalEntryToEdit) => {
      const date = document.querySelector("#journalDate");
      const concept = document.querySelector("#journalConcept");
      const content = document.querySelector("#journalEntry");
      const mood = document.querySelector("#journalMood");
      
      // * fetch the journal entry record corresponding to ID

    }
    
  }


})



