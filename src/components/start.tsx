import React from "react";

const Start = () => {
    return(
        <section className="section" style={{ backgroundColor: '#EFF0F6' }}>
            <div className="start">
                <img src="/assets/cloudBig.png" alt="" style={{ position: 'absolute', left: '-200px', bottom: '-20px' }}/>
                <img src="/assets/cloudSmall.png" alt="" style={{ position: 'absolute', right: '200px', top: '20px' }}/>
                <h5>MAKE IT EASIER</h5>
                <h1>
                    Get started now
                </h1>
                <p>
                    Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
                </p>
                <div className="start-buttons">
                    <button style={{ fontSize: '20px', color: '#FFF', backgroundColor: '#FC9A8D', marginRight: '10px' }}>
                        Sign up
                    </button>
                    <button style={{ fontSize: '20px', backgroundColor: '#FFF' }}>
                        Sign in
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Start;