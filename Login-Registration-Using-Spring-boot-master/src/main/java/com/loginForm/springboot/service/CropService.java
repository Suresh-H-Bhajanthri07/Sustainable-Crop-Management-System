package com.loginForm.springboot.service;

import java.util.List;

import com.loginForm.springboot.model.Crop;

public interface CropService {

    List<Crop> getCropsBySoil(String soilType);

    List<Crop> getCropsByTemperatureRange(double low, double high);

    List<Crop> getAllCrops();

    Crop addCrop(Crop crop);

    List<Crop> getCropsByClimate(String climate);

    List<Crop> getCropsByDistanceRange(double low, double high);

    double calculateExpectedRevenue(double length, double breadth, String cropName);

    Crop findCropByName(String name);
    
}
