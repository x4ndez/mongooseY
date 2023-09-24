const { User, Thought } = require("../models");

module.exports = {

    async getAllThoughts(req, res) {

        // GET to get all thoughts

        try {

            const thoughts = await Thought.find({});

            res.status(200).json(thoughts);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    // GET to get a single thought by its _id

    async createThought(req, res) {

        // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

        try {

            const userThought = {

                thoughtText: req.body.thoughtText,
                username: req.body.username,
                userId: req.body.userId,

            }

            const thought = await Thought.create(userThought);
            const user = await User.findByIdAndUpdate(
                userThought.userId,
                {
                    $push: { thoughts: thought._id }
                },
                {
                    returnDocument: "after",
                });

            res.status(200).json(user);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    // PUT to update a thought by its _id

    // DELETE to remove a thought by its _id

    // /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reactions array field

    // DELETE to pull and remove a reaction by the reaction's reactionId value

}