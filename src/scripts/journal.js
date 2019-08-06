//* fetch the data from the json object

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// fetch("http://localhost:3000/entries")
//   .then(entries => entries.json())
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

getJournalEntries().then(journalEntries => {
    console.table(journalEntries);
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

//* create a reference of where to put the data
const whereToDisplayTheJournalEntriesInTheDOM = document.querySelector(
  "#journalContainer"
);

//* create a representation of the data
const createJournalEntryComponent = (date, concept, contents, mood) => {
  return `<div class="journalEntry">
            <h2>${date}</h2>
            <section>Concepts Covered: ${concept}</section>
            <section>${contents}</section>
            <section>${mood}</section>
        </div>`;
};
//* invoke the function
//* inject the HTML into the DOM

