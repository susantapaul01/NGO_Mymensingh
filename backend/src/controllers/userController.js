import mongoose from "mongoose";
import userdetailsModel from "../models/userdetailsModel.js";
import userModel from "../models/userModel.js";
import { TokenEncode } from "../utils/tokenUtils.js";
import bcrypt from "bcrypt";
const { ObjectId } = mongoose.Types;

//=== Create User
export const Registration = async (req, res) => {
    try {
        let saltRounds = 10;
        let reqBody = req.body;
        let user = await userModel.findOne({ 'email': reqBody.email });
        // console.log(user)
        if(user) {
            return res.status(400).json({ status: false, message: "User already exist. please login"})
        }
        else {
            let hashPassword = await bcrypt.hash(reqBody.password, saltRounds);
            reqBody.password = hashPassword;
            // console.log(hashPassword);
            let data = await userModel.create(reqBody);
            return res.json({ status: 'success', message: "Registration Successful", email: data.email})
        }
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}

//=== User Login
export const Login = async (req, res) => {
    try {
        let reqBody = req.body;
        let { email, password } = reqBody;
        let data = await userModel.findOne({ 'email': email });
        if(!data) {
            return res.status(400).json({ message: "Invalid email address."});
        }
        else {
            let passwordMatching = await bcrypt.compare(password, data.password);
            if(!passwordMatching) {
                // console.log(passwordMatching);
                return res.status(400).json({ message: 'Invalid email address or password' });
            }
            else {
                let token = TokenEncode(data['email'], data['role'], data['_id']);
                // console.log(token);
                let options = {
                    maxAge: 1*24*60*60*1000,
                    secure: true,
                    httpOnly: true,
                    sameSite: 'none'
                }
                res.cookie('Token', token, options);
                return res.status(201).json({ status: 'success', message: "Login Successful", email: data.email });
            }
        }
    }
    catch(e) {
        return res.status(404).json({ status: 'fail', message: e.toString()});
    }
}


//=== User Login
export const Logout = async (req, res) => {
    try {
        res.clearCookie('Token');
        res.status(200).json({ message: 'Successfully logged out.' });
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}

//=== User profile
export const UserProfileUpdate = async (req, res) => {
    try {
        // let email = req.headers['email'];
        let user_id = req.headers['user_id'];
        let userData = req.body;
        let result = await userdetailsModel.updateOne(
            { 'userId': user_id },
            { $set:  userData },
            { upsert: true, new: true}
        )
        console.log(result);
        return res.json({
            status: 'success', message: "User Profile Update Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}


//=== User profile
export const singleProfileRead = async (req, res) => {
    try {
        let isMatch = { $match: { 'userId': new ObjectId(req.headers['user_id'])}}
        let joinWithUser = {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user"
            }
        }
        let unwind = { $unwind: '$user' };
        let projection = { $project: { 'user._id': 0, 'user.password': 0}}
        let result = await userdetailsModel.aggregate([
            isMatch, joinWithUser, unwind, projection
        ])
        // console.log(userData)
        if(result.length === 0) {
            return res.status(200).json({ message: "No Data Found. Please Create your profile." });
        }
        return res.status(200).json({ status: 'success', data: result });
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}


//=== admin can show all user & co-admin profile
export const usersProfileRead = async (req, res) => {
    try {
        let userOnly = { 
            $match: {
                $or: [
                    { 'role': 'user' },
                    { 'role': 'co-admin'}
                ]
            }
        };
        let joinWithUser = {
            $lookup: {
                from: "userdetails",
                localField: "_id",
                foreignField: "userId",
                as: "user"
            }
        }
        let unwind = { $unwind: '$user'}
        let projection = {
            $project: { 
                '_id': 0, 
                'password': 0,
                'user._id': 0,
                'user.userId': 0,
                'user.createdAt': 0,
                'user.updatedAt': 0
            }
        }
        let result = await userModel.aggregate([
            userOnly,
            joinWithUser,
            unwind,
            projection
        ])
        if(result.length === 0) {
            return res.status(200).json({ message: "No User Found" });
        }
        // console.log(result)
        return res.status(200).json({ message: "Profile Read successful", result: result});
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}