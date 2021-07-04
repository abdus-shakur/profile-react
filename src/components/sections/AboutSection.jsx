import parse from 'html-react-parser'




function AboutSection(props) {
    return (
        <section id="about" className="about section-bg">
                    <div className="container">

                        <div className="row no-gutters">
                            <div className="col-xl ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                                <div className="content d-flex flex-column justify-content-center">
                                    <h3>About</h3>
                                    {props.about.description.map(desc=>(<p>{parse(desc)}</p>))}
                                    
                                    <div className="row">
                                    {props.about.aboutObjects.map(aboutObj=>(<div className="col-md-6 col-lg-4 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className={aboutObj.icon}></i>
                                                <span data-purecounter-start="0.1" data-purecounter-end={aboutObj.value} data-purecounter-duration="1"
                                                    data-purecounter-decimals={aboutObj.decimals} className="purecounter"></span>
                                                <p>{parse(aboutObj.description)}</p>
                                            </div>
                                        </div>))}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

    );
}

export default AboutSection;