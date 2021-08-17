import { useEffect, useState } from 'react';
import ScriptTag from 'react-script-tag';
import IntroSection from '../components/sections/IntroSection'
import NavBar from '../components/NavBar'
import AboutSection from '../components/sections/AboutSection'
import SkillSection from '../components/sections/SkillSection'
import ResumeSection from '../components/sections/ResumeSection'
import CertificateSection from '../components/sections/CertificateSection'
import AwardSection from '../components/sections/AwardSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/footer/Footer'
import ProfileAdapter from '../adapter/ProfileAdapter';
import {useLocation} from 'react-router-dom';




function HomePage(props) {
    var profileData = {
        name:"Shakur",
        experience:new Date(),
        designation:"Quality Assurance Automation Engineer",
        resumeUrl:"https://drive.google.com/file/d/1NaT8qWa6KiJpYmOVnzA9pigqAC1WCmxa/view?usp=sharing",
        about:{
            description:[
                "I was Born and brought up in <strong><em>Tamilnadu, India</em></strong> . Growing up, I had a unique perspective of the world - being indian and being an Engineer. I really enjoy learning new things and am constantly seeking out new learning opportunities. I'm not afraid of failure. In fact, I think it is an essential part of the experimental process that gets you to success.<br /><br /> I graduated from the Sethu Institute of technology, Madurai, Tamil Nadu, with a B.E in Mechanical Engineering as an Institute level <strong><em>Bronze Medalist</em></strong>."
            ],
            aboutObjects:[
                {
                    icon:"bi bi-clock",
                    value:"2.5",
                    decimals:"2",
                    description:"<strong>Years of experience</strong> in the field of Information Technology and services, providing automation and development services with varied technologies and requirements."
                },
                {
                    icon:"bi bi-emoji-smile",
                    value:"15",
                    decimals:"0",
                    description:"<strong>Projects</strong> Completed up to date including professional and own creational projects."
                },
                {
                    icon:"bi bi-journal-richtext",
                    value:"8",
                    decimals:"0",
                    description:"<strong>Certifications </strong>done with readily available online validation of the certificates from Leading E-Learning Providers."
                },
                {
                    icon:"bi bi-clock",
                    value:"14",
                    decimals:"0",
                    description:"<strong>Proficient Technologies</strong> with professional handson experience in End to End Testing, Automation, Backend-Web Development and Devops."
                },
                {
                    icon:"bi bi-award",
                    value:"9",
                    decimals:"0",
                    description:"<strong>Awards and Recognition</strong> from Multi-national company for professional outstanding performance, team work, out-of-box thinking with recognized certificates from the organization"
                }
            ]
        },
        skill:{
            description:"I'am an Excellent problem solver with good analytical skills, solid understanding of a software development and computer programming, highly organized and creative, possess engineering leadership, strong research skills, excellent written and communication skills with high proficiency in writing automation scripts.",
            skills:[
                {
                    name:"Java",
                    value:"95"
                },
                {
                    name:"Rest-Assured",
                    value:"90"
                },
                {
                    name:"Postman",
                    value:"100"
                },
                {
                    name:"Jenkins",
                    value:"70"
                },
                {
                    name:"React",
                    value:"85"
                },
                {
                    name:"HTML",
                    value:"70"
                },
                {
                    name:"Selenium",
                    value:"100"
                },
                {
                    name:"JMeter",
                    value:"100"
                },
                {
                    name:"GIT",
                    value:"90"
                },
                {
                    name:"Spring Boot",
                    value:"75"
                },
                {
                    name:"Maven",
                    value:"80"
                }
            ]
        },
        certification:[
            {
                icon:"bx bx-cog",
                title:"REST API Automation",
                certificateUrl:"https://www.udemy.com/certificate/UC-9710310d-4154-4c88-9358-a68cdab513a6/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            }
        ],
        contact:{
            description:"Reach me out any time @ social media sites",
            location:{
                name:"Madurai, Tamilnadu, India",
                url:"https://www.google.co.in/maps/place/Madurai,+Tamil+Nadu/"
            },
            email:"abdusshakurt@gmail.com",
            twitter:"https://twitter.com/abdusshakur1412",
            facebook:"https://www.facebook.com/smart.shakur/#",
            instagram:"https://www.instagram.com/shakur427/",
            linkedIn:"https://www.linkedin.com/in/abdus-shakur/",
            messageReference:""
        },
        awards:{
            description:"",
            details:[
                {
                    category:"Awards",
                    align:'left',
                    categoryDetails:[
                        {
                            title:"On the Spot Awards",
                            highlight:"3 Awards",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            description:[
                                "For Ensuring the Quality of organization delieverables, with Increased attention to details and impeccable knowledge of the domain."
                            ],
                            shortDescription:[
                                "Created Highest number of automation scripts in the team at the critical delieverable period.",
                                "Provided the leadership with extra edge to talk about the wealth of knowledge regarding domain or technology to the customers."
                            ]
                        },
                        {
                            title:"Team Awards",
                            highlight:"3 Awards",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            description:[
                                "Best team award based on the appreciations from client and inclusive of 2 On-the-spot award for exceptional performance as a team."
                            ]
                        },
                        {
                            title:"Insitute Level Medalist",
                            highlight:"Bachelor of Engineering in Mechanical",
                            location:null
                        },
                        {
                            title:"Applause Award",
                            highlight:"Out-Of-The-Box thinking",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            description:[
                                "For solving critical customer issue with a simple java program based tool."
                            ],
                            shortDescription:null
                        }
                    ]
                },
                {
                    category:"Java Web Services",
                    align:0,
                    categoryDetails:[
                        {
                            title:"Virtualized Data Service",
                            highlight:"Spring Boot",
                            summary:null,
                            description:[
                                "Virtual data service which records the changing data at a specific point to database and pushes the same to the cache upon test execution for regression."
                            ],
                            shortDescription:null
                        },
                        {
                            title:"Availabilty Dashboard",
                            highlight:"Spring Boot, React and MongoDb",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            description:[
                                "Environment availabilty service with React based <a href='https://abdus-shakur.github.io/api-health-dashboard-react'>UI Dashboard</a> which displays the availability of test environments."
                            ]
                        }
                    ]
                },
                {
                    category:"Java Web Services",
                    align:1,
                    categoryDetails:[
                        {
                            title:"Virtualized Data Service",
                            highlight:"Spring Boot",
                            summary:null,
                            description:[
                                "Virtual data service which records the changing data at a specific point to database and pushes the same to the cache upon test execution for regression."
                            ],
                            shortDescription:null
                        },
                        {
                            title:"Availabilty Dashboard",
                            highlight:"Spring Boot, React and MongoDb",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            description:[
                                "Environment availabilty service with React based <a href='https://abdus-shakur.github.io/api-health-dashboard-react'>UI Dashboard</a> which displays the availability of test environments."
                            ]
                        }
                    ]
                },
                {
                    category:"Java Web Services Right",
                    align:1,
                    categoryDetails:[
                        {
                            title:"Virtualized Data Service",
                            highlight:"Spring Boot",
                            summary:null,
                            description:[
                                "Virtual data service which records the changing data at a specific point to database and pushes the same to the cache upon test execution for regression."
                            ],
                            shortDescription:null
                        },
                        {
                            title:"Availabilty Dashboard",
                            highlight:"Spring Boot, React and MongoDb",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            description:[
                                "Environment availabilty service with React based <a href='https://abdus-shakur.github.io/api-health-dashboard-react'>UI Dashboard</a> which displays the availability of test environments."
                            ]
                        }
                    ]
                },
                {
                    category:"Java Web Services Left Align",
                    align:'left',
                    categoryDetails:[
                        {
                            title:"Virtualized Data Service",
                            highlight:"Spring Boot",
                            summary:null,
                            description:[
                                "Virtual data service which records the changing data at a specific point to database and pushes the same to the cache upon test execution for regression."
                            ],
                            shortDescription:null
                        },
                        {
                            title:"Availabilty Dashboard",
                            highlight:"Spring Boot, React and MongoDb",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            description:[
                                "Environment availabilty service with React based <a href='https://abdus-shakur.github.io/api-health-dashboard-react'>UI Dashboard</a> which displays the availability of test environments."
                            ]
                        }
                    ]
                }
            ]
        },
        resume:{
            description:"I'm an Experienced Automation Engineer with a demonstrable history of working in the information technology and services industry. Skilled in API Automation, JMeter, Maven, Agile Methodologies, Quality Assurance, and UI Automation. Strong engineering professional with a Bachelor of Engineering - B.E. focused in Automation Testing and Web Development and all related Technologies.", 
            details:[
                {
                    category:"Summary",
                    align:"left",
                    categoryDetails:[
                        {
                            title:"Abdus Shakur",
                            highlight:null,
                            summary:"<br/><em>Highly dedicated Quality Assurance Automation Engineer & Developer, Offering with over <strong><em><span id='experience'>2.88</span></em></strong> years of Industry Experience in Automated Testing.</em>",
                            descriptionType:"bulletin",
                            description:[
                                "<em>Madurai, TamilNadu, India.</em>",
                                "<em>abdusshakurt@gmail.com</em>"
                            ],
                            shortDescription:null
                        }
                    ]
                },
                {
                    category:"Professional Experience",
                    align:"left",
                    categoryDetails:[
                        {
                            title:"Quality Assurance Automation Lead",
                            highlight:"Apr 2020 - Present",
                            summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",
                            descriptionType:"bullet",
                            description:[
                                "Consistently received highest band for three years along with 2X pay rise after clearing an organization level high talent capablity assessment in 2021",
                                "Capable of managing multiple user stories simultaneously even of high complexities."
                            ],
                            shortDescription:[
                                "Presented live demo to clients for newly created custom framework from scratch with multiple features.",
                                "Lead in the design, development and implementation of the automation tests",
                                "Delegate tasks to the members of the team and provide counsel on all aspects of the project.",
                                "Had a clear idea of how the app is supposed to work in every aspect. Set up a test environment in alignment with all the requirements",
                                "Manage Offshore Testing Team and Ensure daily tasks to be promptly fulfilled & comments to be updated in Effort tracking tool.",
                                "Fulfilled all the stories/tasks committed to at the start of the sprint/day, zero spillovers.Participate on Scrum stand up, Sprint grooming, Sprint planning & retrospection connects.",
                                "DevOps: Integrate the automation project with Dev project & Dev pipeline thereby. With every deployment the regression suite to run smoothly. Also ensure JIRA integration of automation status is done by end of each sprint."
                            ]
                        }
                    ]
                }
            ]
        }
       
           
    };

    var [data,setProfileData] = useState(profileData);
    var loc = useLocation()

    useEffect(()=>{
        ProfileAdapter.getProfile(loc.search).then(response=>{setProfileData(response.data);});
        return  ()=>  {ProfileAdapter.getProfile(loc.search).then(response=>{setProfileData(response.data);}); } 
        },[]
    )
    


    return (
       <HandleError data={data}/>
    );
}

function HandleError(props){
    var data = props.data;
    var dataIsNull;
    if(!data){
        dataIsNull = true;
    }
    return (
        <>
        {!dataIsNull?
        <div>
            <IntroSection name={data.name} designation={data.designation} resumeUrl={data.resumeUrl}/>
            <NavBar name={data.name} resumeUrl={data.resumeUrl}/>
            <main id="main">
                <AboutSection about={data.about}/>
                <SkillSection skill={data.skill}/>
                <ResumeSection resume={data.resume}/>
                <CertificateSection certification={data.certification}/>
                <AwardSection awards={data.awards}/>
                <ContactSection name={data.name} contact={data.contact}/>
            </main>
            {/* <Footer/> */}
            <ScriptTag type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" />
            <ScriptTag type="text/javascript" src="./assets/vendor/php-email-form/validate.js" />
            <ScriptTag type="text/javascript" src="./assets/vendor/purecounter/purecounter.js" />
            <ScriptTag type="text/javascript" src="./assets/js/main.js" />
        </div>:<div>Empty</div>
        }
        </>
    );
}

export default HomePage;
