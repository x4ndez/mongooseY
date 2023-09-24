const { User, Thought } = require("../models");

module.exports = {

    // GET to get all thoughts

    async getAllThoughts(req, res) {

        try {

            const thoughts = await Thought.find({});

            res.status(200).json(thoughts);

        } catch (err) {
            res.status(500).json(err);
        }

    }

    // GET to get a single thought by its _id

    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

    // PUT to update a thought by its _id

    // DELETE to remove a thought by its _id

    // /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reactions array field

    // DELETE to pull and remove a reaction by the reaction's reactionId value

}