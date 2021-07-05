import parse from 'html-react-parser'

class GenerateRandom {
    randomNum;
    generateRandomNum() {
        this.randomNum = Math.floor(Math.random() * 10000);
        return this.randomNum;
    }
    constructor() {
        this.generateRandomNum();
    }

    getRandomNumber() {
        return this.randomNum;
    }
    randomize() {
        this.generateRandomNum();
    }

}

function generateAwardDetails(awardCategory) {
    var gen = new GenerateRandom();
    var viewMoreText = "View More ...";
    return (awardCategory.categoryDetails.map(chronoDetail => (
        <div className="resume-item">
            {chronoDetail.title ? <h4>{chronoDetail.title}</h4> : null}
            {chronoDetail.highlight ? <h5>{chronoDetail.highlight}</h5> : null}
            {chronoDetail.summary ? <p>{parse(chronoDetail.summary)}</p> : null}
            {!(chronoDetail.descriptionType || (chronoDetail.descriptionType=="plain"))?
            <div>
                {chronoDetail.description ? chronoDetail.description.map(desc => (<p>{parse(desc)}</p>)) : null}
                {chronoDetail.shortDescription ? <p className="view-more-button" data-bs-toggle="collapse" data-bs-target={"#collapseAwards" + gen.getRandomNumber()} aria-expanded="false" aria-controls="collapseExample">
                    {viewMoreText}
                </p> : null}
                <div className="collapse" id={"collapseAwards" + gen.getRandomNumber()}>
                    {chronoDetail.shortDescription ? chronoDetail.shortDescription.map(desc => (<p>{desc}</p>)) : null}
                    
                </div>
            </div>:
            <ul>
            {chronoDetail.description.map(desc=>(<li>{parse(desc)}</li>))}
            {chronoDetail.shortDescription ? <div><p className="view-more-button" data-bs-toggle="collapse" data-bs-target={"#collapseAwards" + gen.getRandomNumber()} aria-expanded="false" aria-controls="collapseExample">
                View More ...
            </p>
            <div className="collapse" id={"collapseAwards" + gen.getRandomNumber()}>
            {chronoDetail.shortDescription.map(desc=>(<li>{parse(desc)}</li>))}
            </div>
            </div>:null}
            {gen.randomize()}
            
        </ul>
            }
        </div>
    )));
}

export default props => {
    return (
        <div className="container">
            <div className="section-title">
                <h2>{props.pageTitle}</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    {props.awards.details.map(awardCategory => (
                        <div>
                            {((awardCategory.align != 'right' || awardCategory.align == 0 )&& awardCategory.align != 1) ?
                                (<div>
                                    <h3 className="resume-title">{awardCategory.category}</h3>
                                    {generateAwardDetails(awardCategory)}
                                </div>) : null}
                        </div>
                    ))}
                </div>
                <div className="col-lg-6">
                    {props.awards.details.map(awardCategory => (
                        <div>
                            {((awardCategory.align == 'right' || awardCategory.align == 1 )&& awardCategory.align != 0 ) ?
                                (<div>
                                    <h3 className="resume-title">{awardCategory.category}</h3>
                                    {generateAwardDetails(awardCategory)}
                                </div>) : null}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}