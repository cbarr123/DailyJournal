//*  code that deals with getting the data.
//* fetch the data from the json object
const getJournalEntries = search => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }




