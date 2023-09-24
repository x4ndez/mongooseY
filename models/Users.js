const { Schema, model } = require("mongoose");
const thoughtsSchema = require("./Thoughts");

const usersSchema = new Schema(

    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //TODO: Add validation for email >> https://mongoosejs.com/docs/validation.html
            // match: ,
        },
        thoughts: [thoughtsSchema],
        // friends: [usersSchema],
    }

    //Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

);

const User = model("user", usersSchema);

module.exports = User;