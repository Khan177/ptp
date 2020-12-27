import React from "react";

import Image from "./svgshka";

const HowItWorks = () => {
    return(
        <section id="howitworks" className="section" style={{ background: 'linear-gradient(#FFFFFF, #EFF0F6)' }}>
            <div className="howitworks">
                <h1>How it works?</h1>
                <p style={{ color: '#828195', width: '539px', fontSize: '15px', marginBottom: '50px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className="timetable">
                    <div>
                        <img src="/assets/how1.png" alt="" style={{ marginRight: '7px' }}/>
                        <span>
                            <p>
                                Sign up to join our community
                            </p>
                        </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <span style={{ marginRight: '7px' }}>
                            <p>
                                Complete your profile and describe in detail your experience
                            </p>
                        </span>
                        <Image/>
                    </div>
                    <div>
                        <img src="/assets/how2.png" alt="" style={{ marginRight: '10px' }}/>
                        <span>
                            <p>
                                Share your idea and find companions or join an idea that interests you
                            </p>
                        </span>
                    </div>
                </div>
                <div className="rocket">
                    <img src="/assets/illustration.png" alt="" style={{ margin: 'auto' }}/>
                    <div className="rocket-text">
                        <p>
                            Finally ! You can participate in our events and get the opportunity to turn your idea into reality!
                        </p>
                        <button>
                            Let me try!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks