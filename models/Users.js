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
            // Add validation for email >> https://mongoosejs.com/docs/validation.html
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
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
    },
    {

        toJSON: {
            virtuals: true,
        }

    }
);

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
usersSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("user", usersSchema);

module.exports = User;