const { Schema, model } = require("mongoose");
const Thought = require("./Thoughts");

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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            }
        ],
    }

    //Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

);

const User = model("user", usersSchema);

module.exports = User;