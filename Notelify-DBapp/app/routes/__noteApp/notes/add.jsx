import AddNote from "~/components/notes/addNote";
import Modal from "../../../components/util/modal";
import { useNavigate } from '@remix-run/react';
import { addNoteData, getNoteData } from "../../../data/notes.server";
import { redirect } from "@remix-run/node";
import { requireUserSession } from "../../../data/auth.server";

export default function AddPage() {
    const navigate =  useNavigate();

    function closeHandler() {
        navigate("/notes")
    }
    return(
        <>
        <Modal onClose={closeHandler}>
            <AddNote/>
        </Modal> 
        </>
        
    );
}
export async function loader({request}) {
    const userId = await requireUserSession(request);
    const notes = await getNoteData(userId);
    return notes;
}

export async function action({request}) {
    const userId = await requireUserSession(request);
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    await addNoteData(noteData, userId)

    return redirect("/notes")
}
