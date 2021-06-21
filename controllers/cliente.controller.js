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
    var condition = [ 
        { 
            $group: { 
                _id: null, 
                promedio: { $avg: "$plan_actual.precio" } 
            } 
        }, 
        { 
            $project: { 
                _id: 0, 
                promedio: "$promedio" 
            } 
        } 
    ];

    db.getInstance().collection('clientes').aggregate(condition).toArray().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};

// 5. Cantidad de clientes que abonan entre $1.000 y $1.200
exports.cantidadClientesPaganXMonto = (req, res) => {
    var condition = { 
        $and: [ 
            { "plan_actual.precio": { $gte: 1000 } }, 
            { "plan_actual.precio": { $lte: 1200 } } 
        ] 
    };

    db.getInstance().collection('clientes').find(condition).count().then(data => {
        res.send({ "cantidad": data });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};

// 7. Clientes que se encuentran a menos de 10km de las oficinas "Soporte técnico 001"
exports.clientesCercanosSopTec = (req, res) => {
    db.getInstance().collection('oficinas').findOne({ nombre_oficina: "Soporte técnico 001" }).then(data => {
        var soptec001 = data;

        var condition = [
            {
                $geoNear: {
                    near: soptec001.ubicacion.ubicacion_geo,
                    distanceField: "distancia",
                    maxDistance: 5000
                }
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    apellido: 1,
                    direccion: "$ubicacion.direccion",
                    localidad: "$ubicacion.localidad.nombre",
                    provincia: "$ubicacion.provincia",
                    distancia: "$distancia"
                }
            }
        ];
    
        db.getInstance().collection('clientes').aggregate(condition).toArray().then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred."
            });
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    });
};