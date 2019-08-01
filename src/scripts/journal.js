let journalEntries = [
    {
        date: "07/08/2019",
        concept: "Semantic Tags",
        contents: "We discussed semantic tags and their purpose",
        mood: "happy"
    },
    {
        date: "07/09/2019",
        concept: "Flex Box",
        contents: "We learned more about Flexbox",
        mood: "happy"
    },
    {
        date: "07/10/2019",
        concept: "Group Projects",
        contents: "We learned about group projects",
        mood: "happy"
    },
    {
        date: "07/19/2019",
        concept: "Fetch, API",
        contents: "We learned about fetch and APIs",
        mood: "happy"
    },
    {
        date: "07/31/2019",
        concept: "Factory Functions",
        contents: "We learned about factory functions",
        mood: "happy"
    },
]

//* create a reference of where to put the data
const whereToDisplayTheJournalEntriesInTheDOM = document.querySelector("#journalContainer");

//* create a representation of the data
const createJournalEntryComponent = (date, concept, contents, mood) => {
        return `<div class="journalEntry">
            <h2>${date}</h2>
            <section>Concepts Covered: ${concept}</section>
            <section>${contents}</section>
            <section>${mood}</section>
        </div>`
}
//* invoke the function
//* inject the HTML into the DOM

journalEntries.forEach(journalEntry => {
   const htmlRepresentation = createJournalEntryComponent(journalEntry.date, journalEntry.concept, journalEntry.contents, journalEntry.mood);
   whereToDisplayTheJournalEntriesInTheDOM.innerHTML += htmlRepresentation;
})