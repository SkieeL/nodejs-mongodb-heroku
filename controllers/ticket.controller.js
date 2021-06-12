const db = require('../models/db');
const tickets = db.getInstance().collection('tickets');

exports.findAll = (req, res) => {
    tickets.find({}).toArray().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            });
        });
};
