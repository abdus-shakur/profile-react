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
    return (
        <div>
            <IntroSection />
            <NavBar />
            <main id="main">
                <AboutSection />
                <SkillSection />
                <ResumeSection />
                <CertificateSection />
                <AwardSection />
                <ContactSection />
            </main>
            <Footer/>
            <ScriptTag type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" />
            <ScriptTag type="text/javascript" src="./assets/vendor/php-email-form/validate.js" />
            <ScriptTag type="text/javascript" src="./assets/vendor/purecounter/purecounter.js" />
            <ScriptTag type="text/javascript" src="./assets/js/main.js" />
        </div>
    );
}

export default HomePage;
