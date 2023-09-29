const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reactions");
const {

    beautifyDate,

} = require("../util");

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
            //Use a getter method to format the timestamp on querys
            get: beautifyDate,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionsSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtsSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// thoughtsSchema.virtual("beautifyDate")
//     .get(function () {
//         const rawDate = this.createdAt;
//         return date.format(rawDate, "YYYY/MM/DD");
//     })
//     .set(function (x) {
//         this.createdAt = x;
//     });

const Thought = model("thought", thoughtsSchema);

module.exports = Thought;