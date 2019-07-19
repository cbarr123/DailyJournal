

let journalEntries = [
    {
        dateJournalEntry: 07/08/2019,
        conceptsJournalEntry: "Semantic Tags",
        contentsJournalEntry: "We discussed semantic tags and their purpose",
        moodJournalEntry: "happy",
    },
    {
        dateJournalEntry: 07/09/2019,
        conceptsJournalEntry: "Flex Box",
        contentsJournalEntry: "We learned more about Flexbox",
        moodJournalEntry: "happy",
    },
    {
        dateJournalEntry: 07/10/2019,
        conceptsJournalEntry: "Group Projects",
        contentsJournalEntry: "We learned about group projects",
        moodJournalEntry: "happy",
    },
]

//* create a reference of where to put the data
const whereToDisplayTheJournalEntriesInTheDOM = document.querySelector("#journalContainer");

//* create a representation of the data
const createJournalEntryComponent = (journalEntries) => {
    // return 
        `<div class="journalEntry">
            <h2>${journalEntries.dateJournalEntry}</h2>
            <section>${journalEntries.conceptsJournalEntry}</section>
            <section>${journalEntries.contentsJournalEntry}</section>
            <section>${journalEntries.moodJournalEntry}</section>
        </div>`
}
//* invoke the function
//* inject the HTML into the DOM
journalEntries.forEach(entry => {
   const htmlRepresentation = createJournalEntryComponent(journalEntries);
   whereToDisplayTheJournalEntriesInTheDOM.innerHTML += htmlRepresentation;
})