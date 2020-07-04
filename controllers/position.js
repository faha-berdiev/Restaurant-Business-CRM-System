const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.read = async function (req, res) {
    try {
        const position = await Position.find({
            category: req.params.categoryId,
            user: req.user.id
        });
        res.status(200).json(position);
    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.create = async function (req, res) {
    try {
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save();

    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.delete = async function (req, res) {
    try {
        await Position.remove({ id: req.params.id });
        res.status(200).json({
            message: 'Позиция удалена успешно!'
        })
    } catch (e) {
        errorHandler(res, e);
    }
}

module.exports.update = async function (req, res) {
    try {
        const position = await Position.findOneAndUpdate(
            { id: req.params.id },
            { $set: req.body },
            { new: true });
        res.status(200).json(position);
    } catch (e) {
        errorHandler(res, e);
    }
}