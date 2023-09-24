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

    async getThoughtById(req, res) {

        // GET to get a single thought by its _id

        try {

            const thoughtId = req.params.thoughtId;

            const thought = await Thought.findById(thoughtId);

            res.status(200).json(thought);

        } catch (err) {
            res.status(500).json(err);
        }

    },

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

    async updateThoughtById(req, res) {

        // PUT to update a thought by its _id

        try {

            const updateThoughtId = req.body._idThought;
            const updateData = {
                thoughtText: req.body.thoughtText,
            };

            const query = await Thought.findByIdAndUpdate(updateThoughtId, updateData, {
                returnDocument: "after",
            });

            res.status(200).json(query);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async deleteThoughtById(req, res) {

        // DELETE to remove a thought by its _id

        try {

            const deleteThoughtId = req.body._idThought;

            const query = await Thought.findByIdAndDelete(deleteThoughtId);

            res.status(200).json(query);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    // /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reactions array field

    // DELETE to pull and remove a reaction by the reaction's reactionId value

}