import { Outlet, Meta } from "@remix-run/react";
import NoteNav from "../components/notes/noteNav";
import noteStyles from '../styles/notesStyle.css';

export default function NoteAppLayout(){
    return(
        <>
        <Meta/>
        <NoteNav/>
        <Outlet/>
            
        </>
        
    )
}

export const meta = () => ({
    charset: "utf-8",
    title: "Notes Page",
    description: "A simple note taking app. Collect and manage your notes your own way!",
    viewport: "width=device-width,initial-scale=1",
  });

export function links() {
    return([{
        rel: 'stylesheet',
        href: noteStyles
    }])
}