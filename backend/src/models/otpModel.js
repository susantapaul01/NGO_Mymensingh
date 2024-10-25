import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        otp: { 
            type: Number, 
            default: 0, 
            required: true 
        },
        otpstatus: {
            type: Number, 
            default: 0
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const otpModel = mongoose.model('otps', dataSchema);
export default otpModel;