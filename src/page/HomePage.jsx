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
import profileData from '../data/fullStackDeveloper'




function HomePage(props) {

    var [data,setProfileData] = useState(profileData);
    var loc = useLocation()

    useEffect(()=>{
        ProfileAdapter.getProfile(loc.search).then(response=>{setProfileData(response.data);}).catch(exception=>console.log("Exception in getting profile data;"+exception));
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
