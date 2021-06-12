const db = require('../models/db');

// Devuelve todos los clientes
exports.findAll = (req, res) => {
    var condition = {};

    db.getInstance().collection('clientes').find(condition).toArray().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            });
        });
};
