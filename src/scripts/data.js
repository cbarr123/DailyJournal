//*  code that deals with getting the data.
const getJournalEntries = search => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }



// const getAPI = {
//     getJournalEntries () {
//         return fetch("http://localhost:3000/entries")
//             .then(response => response.json())
//     }
// }


