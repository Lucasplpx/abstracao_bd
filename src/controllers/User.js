const User = require('../models/User');

module.exports = {

    async store(req, res) {

        const { name, email } = req.body;

        const resp = await User.create({ name, email });

        return res.json(resp)
    },

    async index(req, res) {

        const resp = await User.findAll();

        return res.json(resp)
    }

}