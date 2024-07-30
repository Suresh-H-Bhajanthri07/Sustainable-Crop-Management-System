import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    console.log("Selected Language:", newLang); // Check selected language
    i18n.changeLanguage(newLang);
  };

  return (
    <label htmlFor="lang">
      Language: {i18n.language}
      <select value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="kn">ಕನ್ನಡ</option>
      </select>
    </label>
  );
};

export default LanguageSwitcher;