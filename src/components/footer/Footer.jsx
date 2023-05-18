import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <h1 className="footer__title">
                        Nurbol
                    </h1>
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link"></a>
                        </li>
                        <li>
                            <a href="#home" className="footer__link">Home</a>
                        </li>

                    </ul>

                    <div className="footer__social">
                        <a href="https://www.instagram.com/nur7iq/" className="home__social-icon" target="_blank">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://m.facebook.com/profile.php?eav=AfYHr7BEIuRTCkHgE33vIsjWwtM5FIU_tliFxePOb-037qAqsmDoQ9dmct43PmLPX64&paipv=0" className="home__social-icon" target="_blank">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://twitter.com/Nurbol_dew" className="home__social-icon" target="_blank">
                            <i className="uil uil-twitter"></i>
                        </a>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;