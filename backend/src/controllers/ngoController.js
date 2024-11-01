import mongoose from "mongoose";
import ngoModel from "../models/ngoModel.js";
import ngodetailsModel from "../models/ngodetailsModel.js";
import ngomonthlyreportModel from "../models/ngomonthlyreportModel.js";
let { ObjectId } = mongoose.Types;

// Create NGO Profile by a "user"
export const CreateNgoProfile = async (req, res) => {
    try {
        let user_id = new ObjectId(req.headers['user_id']);
        let ngoData = req.body;
        let filter = { 'userId': user_id };
        let updateDoc = { $set:  ngoData };
        let options = { upsert: true }
        let result = await ngoModel.updateOne(
            filter,
            updateDoc,
            options
        )
        console.log(result);
        return res.json({
            status: 'success', message: "Create Ngo Profile Successful", result: result
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}

// Create NGO Profile Details by a "user"
export const CreateNgoProfileDetails = async (req, res) => {
    try {
        let userId = new ObjectId(req.headers['user_id'])
        let ngoId = req.params['ngoId'];
        let ngoDetails = req.body;
            ngoDetails.userId = userId;
            ngoDetails.ngoId = ngoId;
        // console.log(userId);
        // console.log(ngoId);
        let isValidNgoId = await ngoModel.findOne({ '_id': ngoId });
        if(!isValidNgoId) {
            return res.json({ status: 'fail', message: "Invalid NGO" });
        }
        else {
            let result = await ngodetailsModel.updateOne(
                { 'ngoId': ngoId },
                { $set:  ngoDetails },
                { upsert: true, new: true}
            )
            return res.json({
                status: 'success', message: "Create Ngo Profile Details Successful", result: result
            })
        }
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}


// Read NGO Profile by a "user"
export const NgoProfileview = async (req, res) => {
    try {
        let isMatch = { $match: { 'userId': new ObjectId(req.headers['user_id'])}}
        let joinwithNgodetails = {
            $lookup: {
                from: "ngodetails",
                localField: "_id",
                foreignField: "ngoId",
                as: "ngoDetails"
            }
        }
        let unwindngoDetails = { $unwind: '$ngoDetails'};
        let joinWithUser = {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user"
            }
        }
        let unwindUser = { $unwind: '$user' };
        let projection = { 
                $project: { 
                    '_id': 0,
                    'user._id': 0, 
                    'user.password': 0, 
                    'user.createdAt': 0, 
                    'user.updatedAt': 0,
                    'ngoDetails._id': 0,
                    'ngoDetails.ngoId': 0,
                    'ngoDetails.userId': 0,
                }
            };
        let result = await ngoModel.aggregate([
            isMatch, 
            joinwithNgodetails, unwindngoDetails,
            joinWithUser, unwindUser,
            projection
        ])
        // console.log(result);
        if(result.length === 0) {
            return res.status(200).json({ message: "No Data Found. Please Create your NGO profile." });
        }
        return res.status(200).json({ status: 'success', data: result });
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}


// Create NGO Report as a user
export const CreateNgoReport = async (req, res) => {
    try {
        let userId = new ObjectId(req.headers['user_id']);
        let ngoId = req.params['ngoId'];
        let reportData = req.body;
            reportData.userId = userId;
            reportData.ngoId = ngoId;

        let isValidNgoId = await ngoModel.findOne({ '_id': ngoId });
        if(!isValidNgoId) {
            return res.json({ status: 'fail', message: "Invalid NGO" });
        }
        else {
            let ngoReport = await ngomonthlyreportModel.create(reportData);
            return res.json({
                status: 'success', message: "Ngo report create Successful.", data: ngoReport
            })
        }
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}

// View NGO Monthly Report
export const viewreportByreportId = (req, res) => {
    try {

    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}