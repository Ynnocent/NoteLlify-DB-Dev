import NoteListItem from "./noteListItem";


function NoteList({notes}) {
    return(
        
        <ol id="notes-list">
            {notes.map((note) => (
                <li key={note.id}>
                    <NoteListItem
                        id={note.id}
                        title={note.title}
                        date={note.date}
                        note={note.note}
                    />
                </li>
            ))}
        </ol>
    
    )
}

export default NoteList;