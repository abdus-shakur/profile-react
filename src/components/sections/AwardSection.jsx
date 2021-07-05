import ChronoData from "../reusable/ChronoData";

function AwardSection(props) {

    var pageTitle = "Achievements and Awards";

    return (
        <section id="awards" className="resume section-bg">
            <ChronoData pageTitle={pageTitle} awards={props.awards}/>
        </section>

    );
}
export default AwardSection;