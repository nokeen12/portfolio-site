import './style/ContactSection.scss'

function ContactSection(){
   
    function activeEmail(){
        var email = document.getElementById("email");
        if(email.classList.contains("activeEmail")){
            return
        }else{
            email.classList.add("activeEmail");
        }
    }
    return(
        <div id="contact-section">
            <h2>Contact Me</h2>
            <form id="contact-form" action="https://formsubmit.co/9d297fb1576ef503a756525a0c0a5969" method="POST">
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="https://nokeen12.github.io/portfolio-site/"/>
                <div className="inputBox">
                    <input type="text" name="name" required="required"></input>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="email" name="email" required="required" id="email" onChange={activeEmail}></input>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea required="required" name="message"></textarea>
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