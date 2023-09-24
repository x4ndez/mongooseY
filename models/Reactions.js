const { Schema, model } = require("mongoose");
// const reactionsSchema = require("./Reactions");

const reactionsSchema = new Schema(

    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
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
        //This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
    }
);

module.exports = reactionsSchema;