import { Form, Link ,useLoaderData,useNavigation} from "@remix-run/react"

export default function AddNote() {
    const noteData = useLoaderData()
    const navigation = useNavigation();
    const isSubmitting = navigation.state !=='idle';

    const defaultValues = noteData ? {
        title: noteData.title,
        note: noteData.note,
        date: noteData.date
    } : {
        title : '',
        note : '',
        date : ''
    }

    return(
        <>
        <section id="note-add-section">
            <Form method="post" id="note-add-form">
            
                <label htmlFor="title"> Title </label>
                <input type="text" name="title" id="title-input" maxLength={30} required defaultValue={defaultValues.title}></input>

                <label htmlFor="content"> Content </label>
                <input type="text" name="content" id="content-input" required defaultValue={defaultValues.note} ></input>
                
                <label htmlFor="date"> Date </label>
                <input type="date" name="date" id="date-input" required defaultValue={defaultValues.date ? defaultValues.date.slice(0,10) : ''}></input>

                <button disabled={isSubmitting}>{isSubmitting? 'Saving...' : 'Submit'} <Link to={"/notes"}></Link> </button>
                
            </Form>
            <button className="close-modal"> <Link to={".."}>Close</Link> </button>
        </section>
        
        </>
    
    )
}