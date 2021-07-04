function AwardSection() {
    return (
<section id="awards" className="resume section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Achievements and Awards</h2>
                        </div>

                        <div className="row">


                            <div className="col-lg-6">
                                <h3 className="resume-title">Awards</h3>
                                <div className="resume-item">
                                    <h4>On the Spot Awards</h4>
                                    <h5>3 Awards</h5>
                                    <p><strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong></p>
                                    <p>For Ensuring the Quality of organization delieverables, with Increased attention to details and impeccable knowledge of the domain.</p>
                                    <p className="view-more-button" data-bs-toggle="collapse" data-bs-target="#collapseAwards1" aria-expanded="false" aria-controls="collapseExample">
                                        View More ...
                                    </p>
                                    <div className="collapse" id="collapseAwards1">
                                        <p>Created Highest number of automation scripts in the team at the critical delieverable period.</p>
                                        <p>Provided the leadership with extra edge to talk about the wealth of knowledge regarding domain or technology to the customers.</p>
                                    </div>
                                </div>
                                <div className="resume-item">
                                    <h4>Team Awards</h4>
                                    <h5>3 Awards</h5>
                                    <p><strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong></p>
                                    <p>Best team award based on the appreciations from client and inclusive of 2 On-the-spot award for exceptional performance as a team.</p>
                                </div>
                                <div className="resume-item">
                                    <h4>Insitute Level Medalist</h4>
                                    <h5>Bachelor of Engineering in Mechanical</h5>
                                </div>
                                <div className="resume-item">
                                    <h4>Applause Award</h4>
                                    <h5>Out-Of-The-Box thinking</h5>
                                    <p><strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong></p>
                                    <p>For solving critical customer issue with a simple java program based tool.</p>
                                </div>

                                <h3 className="resume-title">Java Web Services</h3>
                                <div className="resume-item">
                                    <h4>Virtualized Data Service</h4>
                                    <h5>Spring Boot</h5>
                                    <p>Virtual data service which records the changing data at a specific point to database and pushes the same to the cache upon test execution for regression.</p>
                                </div>
                                <div className="resume-item pb-0">
                                    <h4>Availabilty Dashboard</h4>
                                    <h5>Spring Boot, React and MongoDb</h5>
                                    <p>Environment availabilty service with React based <a href="https://abdus-shakur.github.io/api-health-dashboard-react">UI Dashboard</a> which displays the availability of test environments.</p>
                                </div>


                            </div>

                            <div className="col-lg-6">

                                <h3 className="resume-title">UI Automation</h3>
                                <div className="resume-item">
                                    <h4>Automation Framework</h4>
                                    <h5>Framework Enhancement</h5>
                                    <p>Designed an Automation framework based on selenium implementing a Page-Object Model, Extent Report and query based data extraction from excel with filtering algorithm to speed up scripting upto 5X for test suites.</p>
                                </div>
                                <div className="resume-item pb-0">
                                    <h4>Automation Tool</h4>
                                    <h5>Value Addition</h5>
                                    <p>Created an application specific tool which follow the specified pattern of xpath extraction. To completely automate the process of navigations thereby increasing automation teams productivity.</p>
                                </div>

                                <h3 className="resume-title">API Automation</h3>
                                <div className="resume-item">
                                    <h4>Custom API Framework</h4>
                                    <h5>Automation framework</h5>
                                    <p>Created a REST-Assured based automation framework with in-built dynamic header management and embedded OAuth token generation mechanism with Apache poi based test data and integrated mongoDb support for centralized and parallel test suite execution.</p>
                                </div>
                                <div className="resume-item">
                                    <h4>Velocity template integration</h4>
                                    <h5>Framework Enhancement</h5>
                                    <p>Dynamic generation of json upon test execution to enable hassle free test data maintenance with increased productivity.</p>
                                </div>
                                <div className="resume-item pb-0">
                                    <h4>Jira Integration</h4>
                                    <h5>Jira , TestNG</h5>
                                    <p> Embedded Jira Integration to the custom developed framework. Which enables local or over the cloud executed test cases to reflect the live result status in jira eliminating the need of manual updation</p>
                                </div>


                                <h3 className="resume-title">Devops</h3>
                                <div className="resume-item">
                                    <h4>Single Touch Regression Suite</h4>
                                    <h5>Jenkins</h5>
                                    <p>Enabled test cases from multiple projects to be executed in multiple environments with a simple customizable parametrized jenkins job.</p>
                                </div>
                                <div className="resume-item pb-0">
                                    <h4>Health Check Report</h4>
                                    <h5>Jenkins</h5>
                                    <p>Highly flexible environment monitoring tool for over 20+ Api's in 12 enviroment with scheduled reports being sent to the clients.</p>
                                </div>





                            </div>

                        </div>

                    </div>
                </section>

    );
}
export default AwardSection;