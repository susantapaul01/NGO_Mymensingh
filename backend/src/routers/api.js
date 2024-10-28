import express from "express";
const router = express.Router();

import * as userController from "../controllers/userController.js";
import * as ngoController from "../controllers/ngoController.js";
import authMiddleware from "../middleware/authMiddleware.js";

// User API URL
router.post('/registration', userController.Registration);
router.post('/login', userController.Login);
router.get('/userprofile-view', authMiddleware, userController.UserProfileRead);
router.post('/userprofile-update', authMiddleware, userController.UserProfileUpdate);
router.post('/logout', userController.Logout);


// NGO API URL
router.post('/create-ngo-profile', ngoController.CreateNgoProfile);
router.post('/create-ngo-profile-details', ngoController.CreateNgoProfileDetails);
router.post('/create-ngo-report', ngoController.CreateNgoReport);
router.get('/bgo-profile-view', ngoController.NgoProfileview);


export default router;