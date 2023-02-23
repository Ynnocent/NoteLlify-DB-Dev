import { useNavigate } from "@remix-run/react";
import Modal from "../../../components/util/modal";
import AddNote from "../../../components/notes/addNote";
import { delNoteData, getSingularNoteData, updateNoteData } from "../../../data/notes.server";
import { redirect } from "@remix-run/node";
import { requireUserSession } from "../../../data/auth.server";

export default function UpdateNotesPage() {
    const naviagte = useNavigate();


    function closeHandler() {
        naviagte("..");
    };

    return (
        <Modal onClose={closeHandler}>
            <AddNote/>
        </Modal>
    )
}

export async function loader({request, params}) {
    await requireUserSession(request);
    const noteId = params.id;
    const singleNoteId = await getSingularNoteData(noteId);

    return singleNoteId;

}

export async function action({params, request}) {
    const noteId = params.id;
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    if (request.method === 'DELETE') {
        await delNoteData(noteId);
        return redirect("/notes");
    }
    else if (request.method === 'POST'){ 
        await updateNoteData(noteId,noteData);
        return redirect("/notes")
    }
}