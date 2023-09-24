const { User, Thought } = require("../models");

module.exports = {

    async getAllUsers(req, res) {

        // GET all users

        try {

            const users = await User.find({})
                .populate("friends")
                .populate("thoughts");

            res.status(200).json(users);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async getUserById(req, res) {

        // GET a single user by its _id and populated thought and friend data

        try {

            const user = await User.findById(req.params._id);

            res.status(200).json(user);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async createUser(req, res) {

        // POST a new user

        try {

            const newUser = {

                username: req.body.username,
                email: req.body.email,

            };

            const query = await User.create(newUser);

            res.status(200).json(query);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async deleteUserById(req, res) {

        // DELETE to remove user by its _id

        try {

            const deleteUserId = req.body._id;

            const query = await User.findByIdAndDelete(deleteUserId);

            res.status(200).json(query);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async updateUserById(req, res) {

        // PUT to update a user by its _id

        try {

            const updateUserId = req.body._id;
            const updateData = {
                username: req.body.username,
            };

            const query = await User.findByIdAndUpdate(updateUserId, updateData, {
                returnDocument: "after",
            });

            res.status(200).json(query);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async addFriend(req, res) {

        // POST to add a new friend to a user's friend list

        try {

            const userId = req.params.userId;
            const friendId = req.params.friendId;

            const query = await User.findByIdAndUpdate(
                userId,
                {
                    $push: { friends: friendId }
                },
                {
                    returnDocument: "after",
                });

            res.status(200).json(query);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async deleteFriend(req, res) {

        // DELETE to remove a friend from a user's friend list

        try {

            const userId = req.params.userId;
            const friendId = req.params.friendId;

            const query = await User.findByIdAndUpdate(
                userId,
                {
                    $pull: { friends: friendId }
                },
                {
                    returnDocument: "after",
                });

            res.status(200).json(query);

        } catch (err) {
            res.status(500).json(err);
        }

    }

}