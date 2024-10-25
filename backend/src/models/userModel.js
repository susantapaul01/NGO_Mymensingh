import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['admin', 'coadmin', 'user'],
            default: 'user',
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
let userModel = mongoose.model('users', dataSchema);
export default userModel;