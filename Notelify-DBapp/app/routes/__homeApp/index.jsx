import { Link } from "@remix-run/react";
import Title3D from "../../components/3dGraphics/main3Dtitle";

export default function Index() {
  return (
    <>
      <div id="homepage-div">
        <div id="homepage-content">
          <div id="title3d">
            <Title3D />
          </div>
        </div>
        <h2>
          Welcome to Notelify! A note taking web app made by yours truly! 
          Are you tired of not being able to write and save your notes in 
          fancy looking way? Well, You've come to the right place! Notelify will 
          relieve you of that burden and store your notes in a simple
          but awesome looking way! So, why don't you go ahead and... 
        </h2>
        
        <button className="home-button"> <Link to={"/notes"}> Get Started </Link> </button>
        <hr/>
        <div id="div-updates">
          <div id="div-updates-title">
            <div id="container-grid">
              <h3>Updates</h3>
            </div>
            
          </div>
          
          <h4>
          Hi there, there isn't a whole lot of updates here on Notelify. Mainly,
          because it has just been deployed &#128513;. But the features that are 
          currently on the site is your simple note taking app. (does not sound 
          very appealing I get it &#128517; but don't worry! I will be adding
          more features soon!).
        </h4>
        <h4>
          I am also open to suggestions! If you have any idea on how to make the app
          better or more interesting I would love to hear about them! If you do have
          suggestions or just want to connect with me, please visit the <span id="about-link"><Link to={"/about"}> About Me </Link></span>
          page. To reach my socials! (Also so that you can also know more about me)
        </h4>
        <h4>A thing to note as well is that the dates that are being shown on the notes are in the UTC timezone. I'm still 
          currently trying to find a way to set it relative to the user's timezone.
        </h4>
        </div>
        
        
      </div>
        
    </>
  );
}

export function meta() {
  return{
    title: "Notelify",
    description: "A simple note taking app. Collect and manage your notes your own way!",
    viewport: "width=device-width,initial-scale=1",
  }
}