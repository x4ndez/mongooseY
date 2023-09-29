const { Schema } = require("mongoose");
const {

    beautifyDate,

} = require("../util");

const reactionsSchema = new Schema(

    {
        // reactionId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
        reactionBody: {
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
    },
    {

        toJSON: {
            getters: true,
        },

    }
);

module.exports = reactionsSchema;