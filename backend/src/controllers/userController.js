import mongoose from "mongoose";
import userdetailsModel from "../models/userdetailsModel.js";
import userModel from "../models/userModel.js";
import { TokenEncode } from "../utils/tokenUtils.js";
const { ObjectId } = mongoose.Types;

//=== Create User
export const Registration = async (req, res) => {
    try {
        let reqBody = req.body;
        let user = await userModel.findOne({ 'email': reqBody.email });
        // console.log(user)
        if(user) {
            return res.status(400).json({ status: false, message: "User already exist. please login"})
        }
        else {
            let data = await userModel.create(reqBody);
            return res.json({ status: 'success', message: "Registration Successful", data: data})
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
        let data = await userModel.findOne({ 'email': email, 'password': password });
        if(!data) {
            return res.json({ status: 'fail', message: "Invalid email or password"});
        }
        else {
            let token = TokenEncode(data['email'], data['_id']);
            // console.log(token);
            let options = {
                maxAge: 1*24*60*60*1000,
                secure: true,
                httpOnly: true,
                sameSite: 'none'
            }
            res.cookie('Token', token, options);
            return res.status(201).json({ status: 'success', message: "Login Successful", email: data.email, token: token });
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
export const UserProfileRead = async (req, res) => {
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
        // let projection = { $project: { '_id': 0,  }}
        let result = await userdetailsModel.aggregate([
            isMatch, joinWithUser, unwind
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