import './style/BioSection.scss'

function BioSection(){
    return(
        <div id="bio-section">
            <div id="bio-details">
                <p>
                    <img src={require('../images/me-and-abe.JPG')} alt="cordre"/>
                    I've always had a love for the tech industry and now I have the tools and skills to create it.
                    Working for over 3 years in the labour and food industry intensified my love for Web Development and being able to take better care of my body.
                    My past experiences give me a different outlook on projects and help me excel. Anything is achievable as I'm always looking for ways to improve and better myself.
                    <br/>
                    <br/>
                    Specialties: JavaScript, Node.js, React.js, MongoDB, Express, HTML, CSS, SCSS
                </p>
            </div>
        </div>
    )
}
export default BioSection;