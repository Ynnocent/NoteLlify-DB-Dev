import { Form, Link } from "@remix-run/react";

export default function NoteListItem({title, note, id, date}) {
    function delNoteItemHandler() {

    }
    return(
        <article className="note-item">
            <div>
                <div id="note-item-header">
                    <h2 className="note-item-title">{title}</h2>
                    <p className="note-item-date">{date.slice(0,10)}</p>
                </div>
                <hr/>
                <h3 className="note-item-content">{note}</h3>
            </div>
            <menu className="note-item-action">
                <Form method="delete" action={`/notes/${id}`}>
                    <button className="del-btn" onClick={delNoteItemHandler}>Delete</button>
                </Form>
                <button className="edit-btn"><Link to={id}>Edit</Link></button>
                
            </menu>
        </article>
    )
}

