//*  code that deals with getting the data.
//* fetch the data from the json object
const getJournalEntries = search => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
}

//* POST the journal entry into entries.json
const saveJournalEntry = 
  function(newJournalEntry) {
    return fetch("http://localhost:3000/entries",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
    })
    
  }
//* DELETE section
const deleteEntry = (id) => {
  return fetch(`http://localhost:3000/entries/${id}`,{
  method: "DELETE",
  })
  // .then(response => response.json())
}