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

function HomePage() {
    var data = {
        name:"Shakur",
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
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
                description:"Indepth Understanding of Building Backend for Web Applications from Scratch"   
            },
            {
                icon:"bx bx-cog",
                title:"Selenium WebDriver with Java - Advanced + Frameworks",
                certificateUrl:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",
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
        awards:[
            {
                category:"",
                categoryDetails:[
                    {
                        title:"",
                        highlight:"",
                        subTitle:"",
                        description:[

                        ],
                        shortDescription:[

                        ]
                    }
                ]
            }
        ],
        resume:[
            {
                category:"",
                categoryDetails:[
                    {
                        heading:"",
                        highlight:"",
                        summary:"",
                        title:"",
                        description:[
                            ""
                        ],
                        moreDescription:[
                            ""
                        ]
                    }
                ]
            }
        ]
           
    };



    return (
        <div>
            <IntroSection name={data.name} designation={data.designation} resumeUrl={data.resumeUrl}/>
            <NavBar name={data.name} resumeUrl={data.resumeUrl}/>
            <main id="main">
                <AboutSection about={data.about}/>
                <SkillSection skill={data.skill}/>
                <ResumeSection />
                <CertificateSection certification={data.certification}/>
                <AwardSection />
                <ContactSection name={data.name} contact={data.contact}/>
            </main>
            {/* <Footer/> */}
            <ScriptTag type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" />
            <ScriptTag type="text/javascript" src="./assets/vendor/php-email-form/validate.js" />
            <ScriptTag type="text/javascript" src="./assets/vendor/purecounter/purecounter.js" />
            <ScriptTag type="text/javascript" src="./assets/js/main.js" />
        </div>
    );
}

export default HomePage;
