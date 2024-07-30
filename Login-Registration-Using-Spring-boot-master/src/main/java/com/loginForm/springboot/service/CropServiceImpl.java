package com.loginForm.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loginForm.springboot.model.Crop;
import com.loginForm.springboot.repository.CropRepository;

import java.util.List;

@Service
public class CropServiceImpl implements CropService {

    @Autowired
    private CropRepository cropRepository;

    public Crop findCropByName(String name) {
        return cropRepository.findByName(name);
    }

    public List<Crop> getCropsBySoil(String soilType) {
        return cropRepository.findBySoil(soilType);
    }

     public Crop addCrop(Crop crop) {
        return cropRepository.save(crop);
    }

    public double calculateExpectedRevenue(double length, double breadth, String cropName) {
        Crop crop = cropRepository.findByName(cropName);
        double distanceBetweenCrops = crop.getDistanceBetweenCrops();
        double landArea = length * breadth;
        double numOfCropsLength = length / distanceBetweenCrops;
        double numOfCropsBreadth = breadth / distanceBetweenCrops;
        double numOfCrops = Math.floor(numOfCropsLength) * Math.floor(numOfCropsBreadth);
        double expectedRevenuePerCrop = crop.getExpectedRevenue();
        return numOfCrops * expectedRevenuePerCrop;
    }
    

    public List<Crop> getCropsByTemperatureRange(double low, double high) {
        return cropRepository.findByLowTemperatureGreaterThanEqualAndHighTemperatureLessThanEqual(low, high);
    }

    public List<Crop> getCropsByDistanceRange(double low, double high) {
    return cropRepository.findByDistanceBetweenCropsGreaterThanEqualAndDistanceBetweenCropsLessThanEqual(low, high);
}


    public List<Crop> getCropsByClimate(String climate) {
        return cropRepository.findByClimate(climate);
    }

    public List<Crop> getAllCrops() {
        return cropRepository.findAll();
    }

}
