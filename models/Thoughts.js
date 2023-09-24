const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reactions");

const thoughtsSchema = new Schema(

    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionsSchema],
        //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    }
);

const Thought = model("thought", thoughtsSchema);

module.exports = Thought;