const { Lirow, User } = require('../models');


exports.list =  (req, res) => {

    Lirow.findAll({
        include: [{
            model: User, as: 'user'
        }]})
    .then(lirows => res.json({
        error: false,
        data: lirows
    }))
    . catch(error => res.json({
        error: true,
        data: [],
        error: error
    }))

}

exports.read = (req, res) => {

    const lirow = Lirow.findOne({ where: {id: req.params.id} })
        .then(lirow => res.json({
            error: false,
            data: lirow
        }))
        . catch(error => res.json({
            error: true,
            data: [],
            error: error
        }))

}

exports.register = (req, res) => {

           const lirow = req.body
           lirow.contributors = JSON.stringify(req.body.contributors)

            Lirow.create(req.body)
            .then(lirow => res.status(201).json({
                error: false,
                data: lirow,
                message: 'New User has been created'
            }))
            . catch(error => res.json({
                error: true,
                data: [],
                error: error,
            }))

}

exports.update = (req, res) => {



    const lirowUpdate = Lirow.update(
        req.body,
        {
            where: {
                id: req.params.id}
        })
        .then(lirowUpdate => res.json({
            error: false,
            data: lirowUpdate,
            message: 'User has been updated'
        }))
        . catch(error => res.json({
            error: true,
            data: [],
            error: error,
            message: 'Error updating'
        }))
}

exports.delete = (req, res) => {

    const lirowDeleted = Lirow.destroy(
        {
            where: {
                id: req.params.id
            }
        })
        .then(lirowDeleted => res.json({
            error: false,
            data: lirowDeleted,
            message: 'User has been deleted'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error,
            message: 'Error deleting'
        }))
}
