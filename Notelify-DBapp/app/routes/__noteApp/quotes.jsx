import { requireUserSession } from "../../data/auth.server"
import { getNoteData } from "../../data/notes.server";

export default function QuotesPage() {
    return(
        <div>
            <h1>Under Construction &#128035;</h1>
        </div>
    )
}

export async function loader({request}) {
    const userId = await requireUserSession(request);
    const notes = await getNoteData(userId);

    return notes;
}