export default props => {
    var certificate = props.certificate;
    return (<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 cert-card">
        <div className="icon-box">
            <div className="icon"><i className={certificate.icon}></i></div>
            <h4 className="title"><a href={certificate.url}>{certificate.title}</a></h4>
            <p className="description">{certificate.description}</p>
        </div>
    </div>)
}