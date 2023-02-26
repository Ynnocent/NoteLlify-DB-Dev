import { Outlet, useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { getNoteData } from "../../data/notes.server";
import NoteList from "../../components/notes/noteList";
import { requireUserSession } from "../../data/auth.server";
export default function NotesPage() {

    const notesListData = useLoaderData();

    return(
        <>
        <Outlet/>
        <section id="notes-page-section">
            <h1>Get started and Add a note!</h1>
            
            <button id="add-button">
                <Link to="add">Add Note</Link>
            </button>
        </section>
        <div id="notes-notelist-div">
            <NoteList notes={notesListData}/>
        </div>
        </>
        
        
    )
}

export async function loader({request}) {
    const userId = await requireUserSession(request)

   const noteDataLoader = await getNoteData(userId);
   return noteDataLoader;
    
}