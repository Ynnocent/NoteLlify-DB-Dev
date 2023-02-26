import { Outlet, Meta } from "@remix-run/react";
import MainNav from "~/components/navigation/mainNav";
import homeStyles from "../styles/homeStyle.css";
import { getUserFromSession } from "../data/auth.server";

export default function homeAppLayout() {
    return(
        <>
            <Meta/>
            <MainNav/>
            <Outlet/>
        </>
    )
}

export function loader({request}) {
    return getUserFromSession(request);
}

export const meta = () => ({
    charset: "utf-8",
    title: "Notelify",
    description: "A simple note taking app. Collect and manage your notes your own way!",
    viewport: "width=device-width,initial-scale=1",
  });

export function links() {
    return([{
        rel:'stylesheet',
        href: homeStyles
    }])
}