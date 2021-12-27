import Card from '../reusable/Card'
function CertificateSection(props) {
    return (
        <section id="services" className="services section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Certifications</h2>
                    <p></p>
                </div>
                <div className="row">
                    {props.certification.map(certificate => (
                        <Card certificate={certificate}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CertificateSection;