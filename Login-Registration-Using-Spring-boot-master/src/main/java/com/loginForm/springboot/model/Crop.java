package com.loginForm.springboot.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Crop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "soil")
    private String soil;
    
    @Column(name = "climate")
    private String climate;
    
    @Column(name = "low_temperature")
    private double lowTemperature;
    
    @Column(name = "high_temperature")
    private double highTemperature;
    
    @Column(name = "expected_revenue")
    private double expectedRevenue;
    
    @Column(name = "distance_between_crops")
    private double distanceBetweenCrops;
    
    @Column(name = "nutrients")
    private String nutrients;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @Column(name = "description")
    private String description;
}
