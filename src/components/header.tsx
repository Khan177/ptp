import React from "react";

const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src='/assets/logo.png' alt=""/>
            </div>
            <div className="header-buttons">
                <button style={{ backgroundColor: 'transparent', color: '#828195', marginRight: '32px' }}>
                    Contact us
                </button>
                <button style={{ backgroundColor: '#FC9A8D', color: '#fff' }}>
                    Join
                </button>
            </div>
        </header>
    )
}

export default Header;