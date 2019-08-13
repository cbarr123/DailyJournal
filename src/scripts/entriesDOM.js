


//* code that is responsible for modifying the DOM
//* create a reference of where to put the data
const whereToDisplayTheJournalEntriesInTheDOM = document.querySelector(
    "#journalContainer"
  );

  const renderToDOM = (journalEntries) => {
    journalEntries.forEach(object => {
      // console.table(object)
      const htmlRepresentation = createJournalEntryComponent(object);
      whereToDisplayTheJournalEntriesInTheDOM.innerHTML += htmlRepresentation;
      }); 
  };