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
            description:"",
            skills:[
                {
                    name:"",
                    value:""
                },
                {
                    name:"",
                    value:""
                }
            ]
        },
        resume:{
            description:"",
            sections:[
                {
                    sectionHeading:"",
                    title:"",
                    summary:"",
                    points:""
                }
            ]
        }
    };



    return (
        <div>
            <IntroSection name={data.name} designation={data.designation} resumeUrl={data.resumeUrl}/>
            <NavBar name={data.name} resumeUrl={data.resumeUrl}/>
            <main id="main">
                <AboutSection about={data.about}/>
                <SkillSection />
                <ResumeSection />
                <CertificateSection />
                <AwardSection />
                <ContactSection />
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
