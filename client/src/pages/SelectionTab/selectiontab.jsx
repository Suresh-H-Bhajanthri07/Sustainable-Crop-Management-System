import React from 'react';
import './selectiontab.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const SelectionTab = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();


  const handleSellWaste = () => {
    navigate(`/dashboard/${id}`);
  };

  const handleGetCropInfo = () => {
    navigate(`/cropdetail/${id}`);
  };

  const handleLogout = () => {
    document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    document.cookie = "mail=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    window.location.href = "/";
  };

  return (
    <div className="select-tab">
      <div className="innerselect-tab">
      <button className="logout-btn" onClick={handleLogout}>{t('auth.logout')}</button>
      
      <div className="infoTab">
        <div className="infotabinner">
          <button className="btn-2" onClick={handleGetCropInfo}>{t('Selection.Getcropinfo')}</button>
        </div>
      </div>

      <div className="sellingTab">
        <div className="sellingtabinner">
          <button className="btn-1" onClick={handleSellWaste}>{t('Selection.sellthewaste')}</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SelectionTab;
