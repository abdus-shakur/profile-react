function IntroSection(props) {
    return (
        <section id="hero" className="testng d-flex flex-column align-items-center justify-content-center">
            <h1>Hi, I'm {props.name}!</h1>
            <h2>{props.designation}</h2>
            <div className="text-center"><br /><a class="download-button" href={props.resumeUrl} >Download Resume</a></div>
            <a href="#about" className="btn-get-started scrollto"><i className="bi bi-chevron-double-down"></i></a>
        </section>
    );
}

export default IntroSection;