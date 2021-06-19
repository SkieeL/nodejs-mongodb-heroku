const db = require('../models/db');

// Devuelve todos los planes
exports.findAll = (req, res) => {
    var condition = {};

    db.getInstance().collection('planes').find(condition).toArray().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};
