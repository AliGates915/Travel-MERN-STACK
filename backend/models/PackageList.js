import mongoose from "mongoose";
const { Schema } = mongoose;

const PackageListSchema = new mongoose.Schema(
    {
        packageName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Package',
            required: true,required: true,
        },
        totalDays: {
            type: Number,
            required: true,
        },
        days: {
            type: Number,
            required: true,
        },
        nights: {
            type: Number,
            required: true,
        },
        tourType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TourType',
            required: true,
        },
        facilities: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Facility',
            required: true,
        }],
        rate: {
            type: Number,
            required: true,
        },
        logoPicture: {
            type: String, // assuming you will store the image URL
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }, { timestamps: true });

export default mongoose.model("PackageList", PackageListSchema);
