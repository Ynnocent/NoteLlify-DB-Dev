import { requireUserSession } from "../../data/auth.server"

export default function QuotesPage() {
    return(
        <div>
            <h1>Under Construction &#128035;</h1>
        </div>
    )
}

export async function loader({request}) {
    await requireUserSession(request);
}