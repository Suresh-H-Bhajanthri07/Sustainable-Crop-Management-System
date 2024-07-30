import React, { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import './cropDetail.css';
import axios from 'axios';
// import { height } from '@fortawesome/free-regular-svg-icons/faAddressBook';

import { useTranslation } from 'react-i18next';


const CropDetail = () => {
  const navigate = useNavigate();
  const [showSoilTypeModal, setShowSoilTypeModal] = useState(false);
  const [showSoilTemperatureModal, setShowSoilTemperatureModal] =
    useState(false);
  const [crops, setCrops] = useState(null);
  const [selectedSoilType, setSelectedSoilType] = useState(null);
  const [minTemperature, setMinTemperature] = useState('');
  const [maxTemperature, setMaxTemperature] = useState('');
  const [selectedClimate, setSelectedClimate] = useState('');
  const [cropNameInput, setCropNameInput] = useState('');

  const { t } = useTranslation();



  const openSoilTypeModal = () => {
    setShowSoilTypeModal(true);
  };

  const closeSoilTypeModal = () => {
    setShowSoilTypeModal(false);
  };

  const openSoilTemperatureModal = () => {
    setShowSoilTemperatureModal(true);
  };

  const closeSoilTemperatureModal = () => {
    setShowSoilTemperatureModal(false);
  };

  const navigateToInfoPage = (cropName) => {
    navigate(`/cropinfo/${cropName}`);
  };

  const fetchCropsBySoil = async (soilType) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/crops/by-soil/${soilType}`
      );
      setCrops(data);
    } catch (error) {
      console.error('Error fetching crops by soil type:', error);
    }
  };

  const fetchCropsByTemperatureRange = async (low, high) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/crops/by-temperature-range?low=${low}&high=${high}`
      );
      setCrops(data);
    } catch (error) {
      console.error('Error fetching crops by temperature range:', error);
    }
  };

  const fetchCropsByClimate = async (climate) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/crops/by-climate/${climate}`
      );
      setCrops(data);
    } catch (error) {
      console.error('Error fetching crops by climate:', error);
    }
  };

  const handleSoilTypeApply = () => {
    closeSoilTypeModal();
    if (selectedSoilType) {
      fetchCropsBySoil(selectedSoilType);
    }
  };

  const handleTemperatureApply = () => {
    closeSoilTemperatureModal();
    if (minTemperature && maxTemperature) {
      fetchCropsByTemperatureRange(minTemperature, maxTemperature);
    }
  };

  const handleClimateApply = () => {
    closeSoilTemperatureModal();
    if (selectedClimate) {
      fetchCropsByClimate(selectedClimate);
    }
  };

  const handleCropTypeApply = async () => {
    const id = getCookie('id'); // Get ID from cookie

    try {
      await axios.post(
        `http://localhost:8081/api/users/${id}/add-crop-type?cropName=${cropNameInput}`
      );
      alert('Crop type added successfully!');
    } catch (error) {
      console.error('Error adding crop type:', error);
      alert('Failed to add crop type. Please try again.');
    }
  };

  const handleGetSuitableCrop = async () => {
    const id = getCookie('id'); // Get ID from cookie

    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/users/${id}/suitable-crop`
      );
      // Assuming the response data contains only the name of the suitable crop
      console.log(data);
      if (data) {
        navigateToInfoPage(data);
      } else {
        alert('No suitable crop found.');
      }
    } catch (error) {
      console.error('Error fetching suitable crop:', error);
      alert('Failed to fetch suitable crop. Please try again.');
    }
  };

  const getCookie = (name) => {
    const cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.trim().split('='))
      .find(([cookieName, _]) => cookieName === name);

    if (cookies) {
      return decodeURIComponent(cookies[1]);
    } else {
      return null;
    }
  };

  useEffect(() => {
    const fetchCropDetails = async () => {
      const { data } = await axios.get('http://localhost:8081/crops/all');
      setCrops(data);
      console.log(data);
    };
    fetchCropDetails();
    
  }, []);

  const handleLogout = () => {
    document.cookie = "id=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    document.cookie = "mail=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    window.location.href = "/";
  };

  return (
    <>
      <div className="cropdetail-page">
        <div className="headerinfo">
          <button className="logout-btn" onClick={handleLogout}>{t('auth.logout')}</button>
          <h1>{t('Selection.Crop Info')}</h1>
          <div className="cropname-input-container">
            <label className="cropname-label">
              {t('Selection.Enter previous crop grown')} :
              <input
                type="text"
                name="cropType"
                value={cropNameInput}
                onChange={(e) => setCropNameInput(e.target.value)}
              />
              <button onClick={handleCropTypeApply} id="cropbtn">
                {t('Selection.Apply')}
              </button>
              <button id='suitablebtn' onClick={handleGetSuitableCrop}>{t('Selection.Get Suitable Crop')}</button>
            </label>
          </div>
        </div>
        <div className="displaycrop">
          {crops ? (
            crops.map((crop) => (
              <div
                key={crop.id}
                className="cropinfoexp"
                onClick={() => navigateToInfoPage(crop.name)}
              >
                {/* <div className={`img${(crop.id % 3) + 1}`}>
                </div> */}
                <div className="crop-image-container">
                  <img src={crop.imageUrl} alt={crop.name} className="crop-image" />
                </div>
                <h1>{t(`cropname.${crop.name}`)}</h1>
                <p>{t('Selection.Soil type')}: {t(`soilname.${crop.soil}`)}</p>
                <p>{t('Selection.Climate')}: {t(`climatenames.${crop.climate}`)}</p>
                <p>{t('Selection.Crop minimum distance')}: {crop.distanceBetweenCrops}cm</p>
                <p>{t('Selection.Nutrients')}: {t(`nutrientsname.${crop.nutrients}`)}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="filtertab">
          <div className="soiltype" onClick={openSoilTypeModal}>
            <h1>{t('Selection.filter by soil')}</h1>
            <div className="arr">
              <SlArrowUp />
            </div>
          </div>
          <div className="soiltemperature" onClick={openSoilTemperatureModal}>
            <h1>{t('Selection.filter by soil temperature')}</h1>
            <div className="arr">
              <SlArrowUp />
            </div>
          </div>
        </div>
      </div>

      {/* Soil Type Modal */}
      {showSoilTypeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
              <button onClick={closeSoilTypeModal} className="close-button">
              {t('Selection.close')}
              </button>
              <label htmlFor="soilTpye">
              {t('Selection.Select The Type Of Soil Of Your Land')}:
              </label>
              <div className="options">
                <label>
                  <input
                    type="radio"
                    name="soilType"
                    onChange={() => setSelectedSoilType('Sandy loam')}
                  />
                  {t('soilname.Sandy loam')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="soilType"
                    onChange={() => setSelectedSoilType('Silty loam')}
                  />
                  {t('soilname.Silty loam')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="soilType"
                    onChange={() => setSelectedSoilType('Loamy soil')}
                  />
                  {t('soilname.Loamy soil')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="soilType"
                    onChange={() => setSelectedSoilType('Clay loam')}
                  />
                  {t('soilname.Clay loam')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="soilType"
                    onChange={() => setSelectedSoilType('Clay soil')}
                  />
                  {t('soilname.Clay soil')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="soilType"
                    onChange={() => setSelectedSoilType('Peaty soil')}
                  />
                  {t('soilname.Peaty soil')}
                </label>
                
              {/* Add other soil type options here */}
            </div>
            <button onClick={handleSoilTypeApply} id="btn">
            {t('Selection.Apply')}
            </button>
            </div>
        </div>
      )}

      {/* Soil Temperature Modal */}
      {showSoilTemperatureModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={closeSoilTemperatureModal}
              className="close-button"
            >
              {t('Selection.close')}
            </button>
            <label htmlFor="temperature">{t('Selection.Enter the Minimum Temperature')}:
            <input
              type="temperature"
              name="minTemperature"
              value={minTemperature}
              onChange={(e) => setMinTemperature(e.target.value)}
            />
            </label>

            <label htmlFor="temperature">{t('Selection.Enter the Maximum Temperature')}:
            <input
              type="temperature"
              name="maxTemperature"
              value={maxTemperature}
              onChange={(e) => setMaxTemperature(e.target.value)}
            />
            </label>

            <button onClick={handleTemperatureApply} id="btn" >
            {t('Selection.Apply')}
            </button>

            <label htmlFor="climate">{t('Selection.Climate')}:
            <select
              name="climate"
              value={selectedClimate}
              onChange={(e) => setSelectedClimate(e.target.value)}
            >
              <option value="">{t('Selection.Select Climate')}</option>
              <option value="Temperate">{t('climatenames.Temperate')}</option>
              <option value="Warm temperate">{t('climatenames.Warm temperate')}</option>
              <option value="Cool temperate">{t('climatenames.Cool temperate')}</option>
              <option value="Tropical">{t('climatenames.Tropical')}</option>
              <option value="Arid">{t('climatenames.Arid')}</option>
            </select>
            </label>
            <button onClick={handleClimateApply} id="btn">
            {t('Selection.Apply')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CropDetail;
