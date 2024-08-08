//I first get my values: container for notes, button to create new notes and the notes template
const noteContainer= document.getElementById('note-container');

if (!noteContainer) {
    console.error("Note Container not found");
}
const createNewNoteBtn= document.getElementById('create-new-note-btn');

if (!createNewNoteBtn) {
    console.error("Create note button not found");
}
const noteTemplate= document.getElementById('note-template');

if (!noteTemplate) {
    console.error("note template not found");
}

//I add an event listener to the create new note button
createNewNoteBtn.addEventListener('click',function() {
    
    //here I clone the note template so user can create as many notes as user wants
    const newNote=noteTemplate.cloneNode(true);

    //I add the new note to the container
    noteContainer.appendChild(newNote);

    //displaying the notes
    newNote.style.display='block';

    //adding event listener to the new note to expand it
    newNote.addEventListener('click',()=>{

        //toggling the expanded note
        newNote.classList.toggle('expanded');
    });

    //I have set the container to hold a max of 52 note boxesm so I check if container is full
    if (noteContainer.children.length >= 52) {

        //I create a new page
        const newPage = document.createElement('div');
        newPage.className= 'note-page';
        document.body.appendChild(newPage);

        //moving the new note to the new page
        newPage.appendChild(newNote);
    }
});

//adding event listener to note container to save note
noteContainer.addEventListener('click', (event)=>{

    //checking if the target is a note
    if (event.target.classList.contains('note')) {

        //I get the content of the note
        const noteContent = event.target.querySelector('.note-content');

    }
});