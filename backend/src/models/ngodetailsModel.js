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
        worktitle: {
            type: String,
            required: true
        },
        area: {
            type: String,
            required: true
        },
        continuousproject: {
            type: String,
            required: true
        },
        completedproject: {
            type: String,
            required: true
        },
        funddoner: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const ngodetailsModel = mongoose.model('ngodetails', dataSchema);
export default ngodetailsModel;