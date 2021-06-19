const db = require('../models/db');

// Devuelve todas las oficinas
exports.findAll = (req, res) => {
    var condition = {};

    db.getInstance().collection('oficinas').find(condition).toArray().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};