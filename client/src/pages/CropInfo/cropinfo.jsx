import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './cropinfo.css';

import { useTranslation } from 'react-i18next';


const Cropinfo = () => {
  const { cropName } = useParams(); // Get the crop name from URL parameters
  const [cropDetails, setCropDetails] = useState(null);
  const [length, setLength] = useState('');
  const [breadth, setBreadth] = useState('');
  const [estimatedRevenue, setEstimatedRevenue] = useState(null);

  const { t } = useTranslation();


  useEffect(() => {
    const fetchCropDetails = async () => {
      const { data } = await axios.get(
        `http://localhost:8081/crops/by-name/${cropName}`
      );
      setCropDetails(data);
    };
    fetchCropDetails();
  }, [cropName]);

  const handleCalculateRevenue = async () => {
    const { data } = await axios.get(
      `http://localhost:8081/crops/expected-revenue?length=${length}&breadth=${breadth}&cropName=${cropName}`
    );
    setEstimatedRevenue(data);
  };

  const handleLogout = () => {
    document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    document.cookie = "mail=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    window.location.href = "/";
  };

  return (
    <>
      <div className="selectedcrop">
      <button className="logout-btn" onClick={handleLogout}>{t('auth.logout')}</button>
        <div className="detail-header">
          <h1>{t('Selection.Crop Details')}</h1>
        </div>
        <div className="det-tab">
          {cropDetails ? (
            <>
              <p>{t('cropinfo.Name')}: {t(`cropname.${cropDetails.name}`)}</p>
              <p>{t('cropinfo.Climate')}: {t(`climatenames.${cropDetails.climate}`)}</p>
              <p>{t('cropinfo.Soil')}: {t(`soilname.${cropDetails.soil}`)}</p>
              <p>
              {t('cropinfo.Temperature')}: {cropDetails.lowTemperature} -{' '}
                {cropDetails.highTemperature} {t('cropinfo.degrees')}
              </p>
              <p>{t('cropinfo.Expected Revenue')}: {cropDetails.expectedRevenue} rs per kg</p>
              <p>
              {t('cropinfo.Distance Between Crops')}: {cropDetails.distanceBetweenCrops} cm
              </p>
              <p>{t('Selection.Nutrients')}: {t(`nutrientsname.${cropDetails.nutrients}`)}</p>
              <p>{t('cropinfo.Description')}: {cropDetails.description}</p>
              <p>
              {t('cropinfo.Planting Techniques')}: {t('cropinfo.Learn proper planting techniques for your chosen crops, including seed depth, spacing, and timing')}.
              </p>
              <p>
              {t('cropinfo.Plant Care')}: {t('cropinfo.Understand the specific needs of your crops throughout their growth cycle, including watering, fertilizing, pest control, and weed management')}.
              </p>
              <p>
              {t('cropinfo.Soil Health')}: {t('cropinfo.Learn about soil health practices like cover cropping, composting, and no-till farming to improve your soils fertility and water retention')}.
              </p>
              <div className="revenue-calculator">
                <h2>{t('cropinfo.Calculate Estimated Revenue')}</h2>
                <label>
                  {t('cropinfo.Length (in meters)')}:
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </label>
                <label>
                {t('cropinfo.Breadth (in meters)')}:
                  <input
                    type="number"
                    value={breadth}
                    onChange={(e) => setBreadth(e.target.value)}
                  />
                </label>
                <button onClick={handleCalculateRevenue}>{t('cropinfo.Calculate')}</button>
                {estimatedRevenue !== null && (
                  <p>{t('cropinfo.Estimated Revenue')}: {estimatedRevenue} rs</p>
                )}
              </div>
            </>
          ) : (
            <p>{t('cropinfo.Loading...')}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cropinfo;
