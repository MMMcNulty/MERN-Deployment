const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "🚫 Name is Required ‼"
            ],
        minlength: [3, "{PATH} must be at least 3 characters long!"]
        },
    image_url: {
        type: String,
        required: [true, "🚫 image is Required ‼"]
    },
    number_of_chests: {
        type: Number,
        required: [true, "🚫 {PATH} is Required ‼"],
        minvalue: [0, "{PATH} must be greater than {VALUE}!"]
    },
    catch_phrase: {
        type: String,
        required: [true, "🚫 Catch phrase is required ‼"]
    },
    crew_position: {
        type: String,
        required: [true, "🚫 Crew position is required ‼"]
    },
    peg_leg:{
        type: Boolean,
        default: true
    },
    eye_patch: {
        type: Boolean,
        default: true
    },
    hook_hand: {
        type: Boolean,
        default: true
    }
    }, {timestamps: true});

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);