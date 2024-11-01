import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference type "users"
            required: true,
        },
        nid: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        },
        currentAddress: {
            type: String,
            required: false,
        },
        photo: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const userdetailsModel = mongoose.model('userdetails', dataSchema);
export default userdetailsModel;