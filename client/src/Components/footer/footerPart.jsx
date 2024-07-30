import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import './footer.css';

import { useTranslation } from 'react-i18next';

function FooterPart() {

  const { t } = useTranslation();

  return (
   <div className="main">
    <div className="copyright">
      <p>{t('legal.copyright')}&copy;SSSR</p>
    </div>
    <div className="socials">
    <p className="icons"><TwitterIcon/></p>&nbsp;&nbsp;
    <p className="icons"><FacebookIcon/></p>&nbsp;&nbsp;
    <p className="icons"><LinkedInIcon/></p>
   </div>
   <div className="terms">
    <p>{t('legal.privacyPolicy')} &nbsp;{t('legal.termsAndConditions')}</p>
   </div>
   </div>
  );
}
export default FooterPart;