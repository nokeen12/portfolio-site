import './style/ContactSection.scss'

function ContactSection(){
    return(
        // <div id="contact-section">
        //     <h2>Contact Me</h2>
        //     <a href="mailto:cordrepayne@gmail.com"><u>cordrepayne@gmail.com</u></a>
        // </div>
        <div id="contact-section">
            <h2>Contact Me</h2>
            <form id="contact-form">
                <div className="inputBox">
                    <input type="text" name="" required="required"></input>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required"></input>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea required="required"></textarea>
                    <span>Type your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="Send"></input>
                </div>
            </form>
        </div>
    )
}
export default ContactSection;