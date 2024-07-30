package com.loginForm.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loginForm.springboot.model.Crop;

import java.util.List;

@Repository
public interface CropRepository extends JpaRepository<Crop, Long> {

    List<Crop> findBySoil(String soilType);

    List<Crop> findByLowTemperatureGreaterThanEqualAndHighTemperatureLessThanEqual(double low, double high);

    List<Crop> findByClimate(String climate);

    Crop findByName(String cropName);

    List<Crop> findByDistanceBetweenCropsGreaterThanEqualAndDistanceBetweenCropsLessThanEqual(double low, double high);

    List<Crop> findByNutrientsNot(String latestNutrientType);
}