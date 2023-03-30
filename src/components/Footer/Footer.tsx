import './Footer.css';
import React from 'react';
import IconRSSSchool from '../UI/Icon/IconRSSchool/IconRSSSchool';
import IconGithub from '../UI/Icon/IconGithub/IconGithub';

function Footer() {
  return (
    <header className="footer">
      <div className="footer__container container">
        <div className="footer__school-logo">
          <a className="footer__link" href="https://rs.school/react/">
            <IconRSSSchool />
          </a>
        </div>
        <div className="footer__copyright">© 2023, All Rights Reserved</div>
        <div className="footer__contributors">
          <a className="footer__link" href="https://github.com/gsidnick/">
            <IconGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Footer;
