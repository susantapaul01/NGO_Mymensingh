import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference type
            ref: 'userModel', // Reference to the User model
            required: true,
        },
        nameinBangla: {
            type: String,
            required: true,
        },
        nameinEnglish: {
            type: String,
            required: true,
        },
        registrationNumber: {
            type: String,
            required: true,
        },
        addressinBangla: {
            type: String,
            required: true,
        },
        addressinEnglish: {
            type: String,
            required: true,
        },
        establishmentYear: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        tntNumber: {
            type: String,
        },
        fax: {
            type: String,
        },
        websiteLink: {
            type: String,
        },
        establishmentpersonName: {
            type: String,
        },
        photo: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const ngoModel = mongoose.model('ngos', dataSchema);
export default ngoModel;