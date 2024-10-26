import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userModel', // Reference to the User model
            required: true
        },
        ngoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ngoModel',
            required: true
        },
        projectname: {
            type: String,
            required: true,
        },
        projectsesson: {
            type: String,
            required: true,
        },
        totalfund: {
            type: String,
            required: true,
        },
        expenditureamount: {
            type: String,
            required: true,
        },
        sourceofmoney: {
            type: String,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        beneficiariesnumber: {
            type: String,
            required: true,
        },
        sdgcircle: {
            type: String,
            required: true,
        },
        bdcomponentenhance: {
            type: String,
            required: true,
        },
        planingwork: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const ngoreportModel = mongoose.model('ngoreports', dataSchema);
export default ngoreportModel;