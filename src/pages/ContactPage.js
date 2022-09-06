import '../pageStyle/ContactPage.scss'
import ContactSection from '../components/ContactSection';
import { useEffect } from 'react';

function ContactPage(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <div id="contactpage">
            <ContactSection/>
        </div>
    )
}

export default ContactPage;