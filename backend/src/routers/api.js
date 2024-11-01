import express from "express";
const router = express.Router();

import * as userController from "../controllers/userController.js";
import * as ngoController from "../controllers/ngoController.js";
import { authenticateToken, authorizeAdmin } from "../middleware/authMiddleware.js";

// User API URL
router.post('/registration', userController.Registration);
router.post('/login', userController.Login);
router.post('/email-verity', userController.EmailVerify);
router.post('/otp-verity/:email', userController.OTPVerity);
router.post('/password-reset/:email/:otp', userController.ResetPassword);
router.post('/logout', userController.Logout);
// Profile 
router.get('/profile/me', authenticateToken, userController.singleProfileRead);
router.get('/profile/users', authenticateToken, authorizeAdmin, userController.usersProfileRead);
router.post('/profile-update', authenticateToken, userController.UserProfileUpdate);


// NGO API URL
router.post('/create-ngo-profile', authenticateToken, ngoController.CreateNgoProfile);
router.post('/create-ngo-profile-details/:ngoId', authenticateToken, ngoController.CreateNgoProfileDetails);
router.get('/ngo-profile-view', authenticateToken, ngoController.NgoProfileview);
router.post('/create-ngo-report/:ngoId', authenticateToken, ngoController.CreateNgoReport);
router.get('/view-monthly-report/:ngoId/:reportId', authenticateToken, ngoController.viewreportByreportId);


export default router;