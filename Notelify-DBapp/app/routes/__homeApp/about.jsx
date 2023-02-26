import About3dTitle from "../../components/3dGraphics/about3Dtitle"

export default function AboutPage(){
    return(
        <>
        <div id="about-div">
            <div id="about-content">
                <div id="about-title3d">
                    <About3dTitle/>
                </div>
            </div>
            <div id="about-paragraphs">
                <h1>Hi! I hope you're enjoying your time with Notelify! My name
                    is Ynno Plucena. I am a Software Engineering student at BYU - Idaho.
                    I am currently a junior. I grew up in Dubai, UAE but was born in the
                    Philippines. Growing up I have always been a creative person, I loved
                    the idea of being able to create things. Be that stories, art, or even
                    apps. I chose to do software engineering for a career because, aside
                    from being a creative person I also love programming as a whole.
                </h1>

                <h4>
                    If you would like to see my resume click this <span id="resume-link"><a href="https://ynnoonlineresume.netlify.app/" target="_blank">link</a></span>
                </h4>    
            </div>

            
        </div>
        </>
    )
}
