package com.loginForm.springboot.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.loginForm.springboot.model.Crop;
import com.loginForm.springboot.service.CropService;

import java.util.List;

@RestController
@RequestMapping("/crops")
public class CropController {

    @Autowired
    private CropService cropService;

    @PostMapping("/add")
    public Crop addCrop(@RequestBody Crop crop) {
        return cropService.addCrop(crop);
    }

    @GetMapping("/all")
    public List<Crop> getAllCrops() {
        return cropService.getAllCrops();
    }

    @GetMapping("/by-soil/{soilType}")
    public List<Crop> getCropsBySoil(@PathVariable("soilType") String soilType) {
        return cropService.getCropsBySoil(soilType);
    }

    @GetMapping("/by-temperature-range")
    public List<Crop> getCropsByTemperatureRange(@RequestParam double low, @RequestParam double high) {
        return cropService.getCropsByTemperatureRange(low, high);
    }

    @GetMapping("/by-distance-range")
    public List<Crop> getCropsByDistanceRange(@RequestParam double low, @RequestParam double high) {
        return cropService.getCropsByDistanceRange(low, high);
    }

    @GetMapping("/by-climate/{climate}")
    public List<Crop> getCropsByClimate(@PathVariable("climate") String climate) {
        return cropService.getCropsByClimate(climate);
    }

    @GetMapping("/expected-revenue")
    public double calculateExpectedRevenue(@RequestParam double length, @RequestParam double breadth, @RequestParam String cropName) {
        return cropService.calculateExpectedRevenue(length, breadth, cropName);
    }

    @GetMapping("/by-name/{name}")
    public Crop getCropByName(@PathVariable String name) {
        return cropService.findCropByName(name);
    }
}

