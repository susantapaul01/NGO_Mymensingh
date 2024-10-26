import express from "express";
const router = express.Router();

import * as userController from "../controllers/userController.js";
import * as ngoController from "../controllers/ngoController.js";

// User API URL
router.post('/registration', userController.Registration);
router.post('/login', userController.Login);
router.post('/userprofile-update', userController.UserProfileUpdate);
router.get('/userprofile-view', userController.UserProfileRead);
router.post('/logout', userController.Logout);



router.post('/create-ngo-profile', ngoController.CreateNgoProfile);
router.post('/create-ngo-profile-details', ngoController.CreateNgoProfileDetails);
router.post('/create-ngo-report', ngoController.CreateNgoReport);
router.get('/bgo-profile-view', ngoController.NgoProfileview);


export default router;