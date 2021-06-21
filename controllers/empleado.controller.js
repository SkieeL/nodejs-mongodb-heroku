const db = require('../models/db');

// Devuelve todos los empleados
exports.findAll = (req, res) => {
    var condition = {};

    db.getInstance().collection('empleados').find(condition).toArray().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};

// 2. Los 3 empleados que más tickets respondieron
exports.empleadosMasTicketsResponden = (req, res) => {
    var condition = [ 
        { 
            $project: { 
                _id: 0,
                nombre: 1, 
                apellido: 1, 
                cantidad_tickets_respondidos: 1
            } 
        },
        { $sort: { "cantidad_tickets_respondidos": -1 } }, 
        { $limit: 3 } 
    ];

    db.getInstance().collection('empleados').aggregate(condition).toArray().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};

// 10. Mostrar empleados que son clientes y generaron tickets
exports.empleadosClientesGeneraronTicket = (req, res) => {
    var condition = [ 
        {
            $lookup: {
                from: "tickets",
                as: "tickets_generados",
                let: { dni: "$dni" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: [ "$cliente.dni", "$$dni" ]
                            }
                        }
                    }
                ]
            }
        },
        {
            $match: { "tickets_generados": { $not: { $size: 0 } } }
        }
    ];

    db.getInstance().collection('empleados').aggregate(condition).toArray().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};
