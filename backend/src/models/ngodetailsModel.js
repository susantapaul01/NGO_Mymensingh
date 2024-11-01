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
        workdetails: { type: String, required: true },              // এনজিও সার্বিক কার্যক্রম
        area: { type: String, required: true },                     // এনজিও বিস্তৃতি এলাকা
        continuousprojectsname: { type: String, required: true },    // চলমান প্রকল্পসমূহ
        completedprojectsname: { type: String, required: true },     // সমাপ্তকৃত প্রকল্পসমূহ
        funddoner: { type: String, required: true }                 // প্রকল্পের অর্থায়নকারী দেশ/ সংস্থাসমূহ
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const ngodetailsModel = mongoose.model('ngodetails', dataSchema);
export default ngodetailsModel;