import './style/ContactSection.scss'

function ContactSection(){
    return(
        <div id="contact-section">
            <h2>Contact Me</h2>
            <form action="mailto:cordrepayne@gmail.com" method="post" enctype="text/plain">
                Name/Company:<br/>
                <input type="text" name="name" id="name" />
                <br/>
                Email:<br/>
                <input type="text" name="email" id="email" />
                <br/>
                Message:<br/>
                <input type="text" name="message" id="message"/>
                <br/>
                <input type="submit" value="Send" id='send'/>
            </form>
        </div>
    )
}
export default ContactSection;