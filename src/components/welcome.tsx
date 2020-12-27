import React from "react";

const Welcome = () => {
    return(
        <div id="start" className="section" style={{ position: 'relative' }}>
            <div className="welcome">
                <h1>
                    Your startup starts here
                </h1>
                <p className="welcome-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className="welcome-buttons">
                    <button style={{ backgroundColor: '#FC9A8D', color: '#fff', marginRight: '32px'  }}>
                        Sign up
                    </button>
                    <button style={{ backgroundColor: 'transparent', color: '#1C1B2F', border: '1px solid #E3E4EA'}}>
                        Sign in
                    </button>
                </div>
                <div className="welcome-humans">
                    <img src="/assets/illustrations.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Welcome