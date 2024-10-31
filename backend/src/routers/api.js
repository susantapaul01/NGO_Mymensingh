import express from "express";
const router = express.Router();

import * as userController from "../controllers/userController.js";
import * as ngoController from "../controllers/ngoController.js";
import { authenticateToken, authorizeAdmin } from "../middleware/authMiddleware.js";

// User API URL
router.post('/registration', userController.Registration);
router.post('/login', userController.Login);
router.get('/profile/me', authenticateToken, userController.singleProfileRead);
router.get('/profile/users', authenticateToken, authorizeAdmin, userController.usersProfileRead);
router.post('/profile-update', authenticateToken, userController.UserProfileUpdate);
router.post('/logout', userController.Logout);


// NGO API URL
router.post('/create-ngo-profile', ngoController.CreateNgoProfile);
router.post('/create-ngo-profile-details', ngoController.CreateNgoProfileDetails);
router.post('/create-ngo-report', ngoController.CreateNgoReport);
router.get('/bgo-profile-view', ngoController.NgoProfileview);


export default router;