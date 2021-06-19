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


// 4. Promedio total cuotas abonadas
exports.promedioCuotasAbonadas = (req, res) => {
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

// 5. Cantidad de clientes que pagan entre $1.000 y $1.200
exports.cantidadClientesPaganXMonto = (req, res) => {
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

// 7. Mostrar clientes que se encuentran a menos de 10km de las oficinas "Soporte técnico 001"
exports.clientesCercanosSopTec = (req, res) => {
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