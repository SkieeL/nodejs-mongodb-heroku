const db = require('../models/db');

// Retrieve all tickets from the database.
exports.findAll = (req, res) => {
    var condition = {};

    db.getInstance().collection('tickets').find(condition).toArray().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            });
        });
};
