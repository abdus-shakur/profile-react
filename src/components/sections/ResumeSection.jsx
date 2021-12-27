import ChronoData from "../reusable/ChronoData";

function ResumeSection(props) {
    var sectionTitle = "Resume"
    var resumeData = props.resume;
    return (
        <section id="resume" className="resume section-bg">
        <ChronoData pageTitle={sectionTitle} awards={resumeData}/>
        </section>

    );
}

export default ResumeSection;