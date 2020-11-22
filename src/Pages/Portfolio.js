import React from "react";
import homeg2g from "./Images/homeG2G.PNG";
import searchg2g from "./Images/searchG2G.PNG";
import reviewg2g from "./Images/reviewG2G.PNG";
import mobileFirst from "./Images/mobile-first.PNG";
import ipad from "./Images/ipad.PNG";
import browser from "./Images/browser.PNG";
import introToQuiz from "./Images/Intro-to-quiz.PNG";
import questionQuiz from "./Images/quiz-question.PNG";
import highScores from "./Images/high-scores.PNG";
import home from "./Images/home.PNG";
import notes from "./Images/notes.PNG";
import dayPlanner from "./Images/Day-Planner.PNG";
import passwordGenerator from "./Images/Password-Generator.PNG";


function Portfolio() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">Portfolio</div>
                        <hr></hr>
                        <h2>got2go!</h2>
                        <br></br>
                        <ul>
                            <li><a href="https://arcane-stream-61363.herokuapp.com/" target="_blank" rel='noreferrer noopener'>Deployed
                                Application</a></li>
                            <li><a href="https://github.com/ElijahFlanders96/Project_2.git" target="_blank" rel='noreferrer noopener'>Github
                                Repository</a></li>
                        </ul>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <img className="PWG" src={homeg2g} alt="Home-page"></img>
                            </div>
                            <div className="col-4">
                                <img className="PWG" src={searchg2g} alt="Search-page"></img>
                            </div>
                            <div className="col-4">
                                <img className="PWG" src={reviewg2g} alt="Reveiw-page"></img>
                            </div>
                        </div>
                        <hr></hr>
                        <br></br>
                        <h2>Fuzzy Feelings</h2>
                        <br></br>
                            <ul>
                                <li><a href="https://penguinorange.github.io/fuzzy_feelings/" target="_blank" rel='noreferrer noopener' >Deployed
                                Application</a></li>
                                <li><a href="https://github.com/penguinorange/fuzzy_feelings.git" target="_blank" rel='noreferrer noopener'>Github
                                Repository</a></li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col-4">
                                    <img className="PWG" src={mobileFirst} alt="Mobile-first-view"></img>
                                </div>
                                <div className="col-4">
                                    <img className="PWG" src={ipad} alt="iPad-view"></img>
                                </div>
                                <div className="col-4">
                                    <img className="PWG" src={browser} alt="Browser-view"></img>
                                </div>
                            </div>
                            <hr></hr>
                            <br></br>
                            <h2>What Am I?</h2>
                            <br></br>
                            <ul>
                                <li><a href="https://cc22389.github.io/What-am-I/quiz.html" target="_blank" rel='noreferrer noopener'>Deployed
                                Application</a></li>
                                <li><a href="https://github.com/cc22389/What-am-I.git" target="_blank" rel='noreferrer noopener'>Github
                                Repository</a></li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col-4">
                                    <img className="PWG" src={introToQuiz} alt="Intro-to-quiz"></img>
                                </div>
                                <div className="col-4">
                                    <img className="PWG" src={questionQuiz} alt="Quiz-question"></img>
                                </div>
                                <div className="col-4">
                                    <img className="PWG" src={highScores} alt="High-scores"></img>
                                </div>
                            </div>
                            <hr></hr>
                            <br></br>
                            <h2>Note Taker</h2>
                            <br></br>
                            <ul>
                                <li><a href="https://note-taker-cc22389.herokuapp.com/" target="_blank" rel='noreferrer noopener'>Deployed
                                Application</a></li>
                                <li><a href="https://github.com/cc22389/Note_Taker.git" target="_blank" rel='noreferrer noopener'>Github
                                Repository</a></li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col-6">
                                    <img className="PWG" src={home} alt="Notes-home-page"></img>
                                </div>
                                <div className="col-6">
                                    <img className="PWG" src={notes} alt="Notes-page"></img>
                                </div>
                            </div>
                            <hr></hr>
                            <br></br>
                            <h2>Day Planner</h2>
                            <br></br>
                            <ul>
                                <li><a href="https://cc22389.github.io/Day-Planner/Develop/index.html" target="_blank" rel='noreferrer noopener'>Deployed
                                Application</a></li>
                                <li><a href="https://github.com/cc22389/Day-Planner.git" target="_blank" rel='noreferrer noopener'>Github
                                Repository</a></li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                <img className="PWG" src={dayPlanner} alt="Day-Planner"></img>
                                </div>
                            </div>
                            <hr></hr>
                            <br></br>
                            <h2>Password Generator</h2>
                            <br></br>
                            <ul>
                                <li><a href="https://cc22389.github.io/Password-Generator/Develop/" target="_blank" rel='noreferrer noopener'>Deployed
                                Application</a></li>
                                <li><a href="https://github.com/cc22389/JavaScript-Password-Generator.git"
                                    target="_blank" rel='noreferrer noopener'>Github
                                Repository</a></li>
                            </ul>
                            <br></br>
                            <div className="row">
                                <div className="col-12">
                                    <img className="PWG" src={passwordGenerator} alt="Password-Generator"></img>
                                </div>
                            </div>
                            <hr></hr>
                            <br></br>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default Portfolio