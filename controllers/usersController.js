const { User, Thought } =
    require("../models");

module.exports = {

    async getAllUsers(req, res) {

        try {

            const users = await User.find({});
            res.status(200).json(users);

        } catch (err) {
            res.status(500).json(err);
        }

    }

}