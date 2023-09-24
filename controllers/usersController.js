const { User, Thought } =
    require("../models");

module.exports = {

    async getAllUsers(req, res) {

        // GET all users

        try {

            const users = await User.find({});
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

    // async deleteUserById(req, res) {

    //     // DELETE to remove user by its _id

    //     try {

    //         const user = await User.findById(req.params._id);
    //         res.status(200).json(user);

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }

    // }

}