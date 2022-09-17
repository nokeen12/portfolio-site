import './style/ContactSection.scss'

function ContactSection(){
    return(
        <div id="contact-section">
            <h2>Contact Me</h2>
            <form action="mailto:cordrepayne@gmail.com" method="post" enctype="text/plain">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <textarea type="text" name="message" id="message" placeholder="Message" />
                <input type="submit" value="Send" id='send'/>
            </form>
        </div>
    )
}
export default ContactSection;