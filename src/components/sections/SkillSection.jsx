function SkillSection(props) {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>{props.skill.description}</p>
                </div>
                <div className="row skills-content">
                    {props.skill.skills.map(skill => (
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">{skill.name} <i className="val"></i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;