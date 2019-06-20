const { User } = require('../models');
const bcrypt = require('bcrypt')

exports.list =  (req, res) => {

    User.findAll({})
    .then(users => res.json({
        error: false,
        data: users
    }))
    . catch(error => res.json({
        error: true,
        data: [],
        error: error
    }))

}

exports.read = (req, res) => {

    const user = User.findOne({ where: {id: req.params.id} })
        .then(user => res.json({
            error: false,
            data: user
        }))
        . catch(error => res.json({
            error: true,
            data: [],
            error: error
        }))

}

exports.register = (req, res) => {

            const encryptPassword = password => {
                
                const salt = bcrypt.genSaltSync(10)
                return bcrypt.hashSync(password, salt)

            }
            const user = req.body
            user.password = encryptPassword(req.body.password)
            User.create(req.body)
            .then(user => res.status(201).json({
                error: false,
                data: user,
                message: 'New User has been created'
            }))
            . catch(error => res.json({
                error: true,
                data: [],
                error: error,
            }))

}

exports.update = (req, res) => {
        
    const encryptPassword = password => {
    
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    
    }
    const user = req.body
    user.password = encryptPassword(req.body.password)

    const userUpdate = User.update(
        req.body,
        {
            where: {
                id: req.params.id}
        }
    
        )
        .then(userUpdate => res.json({
            error: false,
            data: userUpdate,
            message: 'User has been updated'
        }))
        . catch(error => res.json({
            error: true,
            data: [],
            error: error,
            message: 'Error updating'
        }))
}
