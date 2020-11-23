import React from "react";
import './Project.css';
import profile from './profilePicture.PNG';
import resume from './Resume.pdf';

function About() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">About Me</div>
                        <hr></hr>
                        <div className="row justify-content-center">
                            <div className="col-6 text-center profile">
                                <img className="PWG" src={profile} alt="profile" id="proPic"></img>
                            </div>
                            <div className="col-xs-12 col-md-6 pull-left">
                                <div className="card-text profile">
                                    <p>Hello!</p>
                                    <p>My name is Casey Morgan. I am a Full-Stack Web Developer with a heavy interest in Front-end web
                                            development.</p>
                                    <p>Phone: 123-456-7890</p>
                                    <li>
                                        <a href={resume} target="_blank" rel='noreferrer noopener'>Resume</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/casey-morgan-78878249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIo8BE6OlS7WVtWjoLJDs%2BQ%3D%3D"
                                            target="_blank" rel='noreferrer noopener'>LinkedIn Profile</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/cc22389" target="_blank" rel='noreferrer noopener' >Github Profile</a>
                                    </li>
                                    <li>
                                        <a href="mailto:caseyjeanmorgan@gmail.com" target="_blank" rel='noreferrer noopener' >Email</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About