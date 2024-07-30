package com.loginForm.springboot.Controller;

import com.loginForm.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/{userId}/add-crop-type")
    public String addSoilTypeToUser(@PathVariable Long userId, @RequestParam String cropName) {
        return userService.addNutrientTypeToUser(userId, cropName);
    }

    @GetMapping("/{userId}/suitable-crop")
    public String determineSuitableCrop(@PathVariable Long userId) {
        return userService.determineSuitableCrop(userId);
    }
}
