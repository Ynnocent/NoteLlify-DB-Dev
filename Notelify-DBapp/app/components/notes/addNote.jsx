import { Form, Link ,useActionData,useLoaderData,useNavigation} from "@remix-run/react"

export default function AddNote() {
    const noteData = useLoaderData()
    const navigation = useNavigation();
    const validationErrors = useActionData();
    const isSubmitting = navigation.state !=='idle';
    
    const defaultValues = noteData ? {
        title: noteData.title,
        note: noteData.note,
        
    } : {
        title : '',
        note : '',
    }

    return(
        <>
        <section id="note-add-section">
            <Form method="post" id="note-add-form">
            
                <label htmlFor="title"> Title </label>
                <input type="text" name="title" id="title-input" maxLength={30} required defaultValue={defaultValues.title}></input>

                <label htmlFor="content"> Content </label>
                <textarea type="text" name="content" id="content-input" required defaultValue={defaultValues.note} rows={15} cols={25} placeholder="Start doing writing stuff!" wrap="hard"></textarea>
                {validationErrors && <ul style={{listStyle: "none", textAlign: "left"}}>
                    {Object.values(validationErrors).map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>}
                <button disabled={isSubmitting}>{isSubmitting? 'Saving...' : 'Submit'} <Link to={"/notes"}></Link> </button>
                
            </Form>
            <button className="close-modal"> <Link to={".."}>Close</Link> </button>
        </section>
        
        </>
    
    )
}
