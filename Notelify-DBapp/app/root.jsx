import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import rootStyles from './styles/globalStyle.css';

import Error from "./components/util/error";


export const meta = () => ({
  charset: "utf-8",
  title: "Notelify",
  description: "A simple note taking app. Collect and manage your notes your own way!",
  viewport: "width=device-width,initial-scale=1",
});

function Document({title, children}) {
  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />   
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet/>
    </Document>
  );
}

export function CatchBoundary() {
  const caughtResponse = useCatch();
  return(
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.title}>
          <p>
            {caughtResponse.data?.message || 'Something is wrong. Please try again later, sorry about that.'}
          </p>
          <p>
            Back to <Link to={"/"}>safety</Link>
          </p>
        </Error>
      </main>
    </Document>
  )
}

export function ErrorBoundary({error}) {
  return(
    <Document title={"An error occurred"}>
      <main>
        <Error title="An error occured">
          <p>
          {error.message || 'Something is wrong. Please try again later. Sorry about that.'}
          </p>
          <p>
            Back to <Link to={"/"}>safety</Link>
          </p>
        </Error>
      </main>
    </Document>
  )
}

export function links() {
  return([{
    rel: 'stylesheet',
    href: rootStyles
  }])
}