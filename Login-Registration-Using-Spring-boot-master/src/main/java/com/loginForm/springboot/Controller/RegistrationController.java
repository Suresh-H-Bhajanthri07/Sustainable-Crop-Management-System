package com.loginForm.springboot.Controller;


import com.loginForm.springboot.Registration.UserModel;
import com.loginForm.springboot.model.User;
import com.loginForm.springboot.model.waste.*;
import com.loginForm.springboot.repository.waste.*;
import com.loginForm.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @Autowired
    private UserService userService;
    @Autowired
    private WasteRiceHuskRepo riceHuskRepo;

    @Autowired
    private WasteTobaccoCropRepo tobaccoCropRepo;

    @Autowired
    private WasteWheatHuskRepo wheatHuskRepo;

    @Autowired
    private WasteCastorCropRepo castorCropRepo;

    @Autowired
    private WasteCornBotRepo cornBotRepo;

    @Autowired
    private WasteCottonPlantLeftOutsRepo cottonPlantLeftOutsRepo;
    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userModel){
        User user = userService.registerUser(userModel);
        long id = user.getId();

        WasteCastorCrop w1 = new WasteCastorCrop(id, 0, 0);
        castorCropRepo.save(w1);

        WasteCornBot w2 = new WasteCornBot(id, 0, 0);
        cornBotRepo.save(w2);

        WasteWheatHusk w3 = new WasteWheatHusk(id, 0, 0);
        wheatHuskRepo.save(w3);

        WasteTobaccoCrop w4 = new WasteTobaccoCrop(id, 0, 0);
        tobaccoCropRepo.save(w4);

        WasteCottonPlantLeftOuts w5 = new WasteCottonPlantLeftOuts(id, 0, 0);
        cottonPlantLeftOutsRepo.save(w5);

        WasteRiceHusk w6 = new WasteRiceHusk(id, 0, 0);
        riceHuskRepo.save(w6);
        return "Success";
    }

     @PostMapping("/login")
    public ResponseEntity<?> postMethodName(@RequestBody LoginModel loginModel) {
        String email = loginModel.getEmail();
        String password = loginModel.getPassword();
        User user = userService.getUserByEmail(email);
        
        if(user == null){
            return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
        }

        // Assuming your User object has a getId() method
        return new ResponseEntity<>(new LoginResponse(user.getId(), "Login successful"), HttpStatus.OK);
    }
}

class LoginResponse {
    private Long id;
    private String message;

    public LoginResponse(Long id, String message) {
        this.id = id;
        this.message = message;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
