package com.loginForm.springboot.service;

import com.loginForm.springboot.Registration.UserModel;
import com.loginForm.springboot.model.Crop;
import com.loginForm.springboot.model.Role;
import com.loginForm.springboot.model.User;
import com.loginForm.springboot.repository.CropRepository;
import com.loginForm.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import java.util.Optional;
import java.util.Random;

@Service
public class UserServiceImp implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
     @Autowired
    private CropRepository cropRepository;

    @Override
    public User registerUser(UserModel userModel) {
        User user = new User();
        user.setEmail(userModel.getEmail());
        user.setFirstName(userModel.getFirstName());
        user.setLastName(userModel.getLastName());
        user.setAadharNo(userModel.getAadharNo());
        user.setDob(userModel.getDob());
        user.setId(userModel.getId());
        user.setPhoneNo(userModel.getPhoneNo());
        user.setVillage(userModel.getVillage());
        user.setState(userModel.getState());
        user.setPassword(passwordEncoder.encode(userModel.getPassword()));
        userRepository.save(user);
        return user;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));

    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    @Transactional
    public String addNutrientTypeToUser(Long userId, String cropName) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return "User not found";
        }

        Crop crop = cropRepository.findByName(cropName);
        if (crop == null) {
            return "Crop not found";
        }

        User user = optionalUser.get();
        user.getNutrientTypes().add(crop.getNutrients());
        userRepository.save(user);

        return "Nutrient type added successfully";
    }

        public String determineSuitableCrop(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return "User not found";
        }

        User user = optionalUser.get();
        List<String> nutrientTypes = (List<String>) user.getNutrientTypes();

        if (nutrientTypes.isEmpty()) {
            return "No nutrient types found for the user";
        }

        String latestNutrientType = nutrientTypes.get(nutrientTypes.size() - 1);
        List<Crop> suitableCrops = cropRepository.findByNutrientsNot(latestNutrientType);

        if (suitableCrops.isEmpty()) {
            return "No suitable crops found for the latest nutrient type";
        }

        Random random = new Random();
        Crop suitableCrop = suitableCrops.get(random.nextInt(suitableCrops.size()));
        return suitableCrop.getName();
    }


        @Override
        public User getUserByEmail(String email) {
            User user = userRepository.findByEmail(email);
            return user;
        }
}