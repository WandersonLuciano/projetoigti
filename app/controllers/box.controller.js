const Box = require('../models-mongodb/box');

exports.list =  (req, res) => {

    Box.find({}, (err, boxes) => {
        res.json(boxes)
    })  

}

exports.read = (req, res) => {

    Box.findById(req.params.id, (err, box) => {
        res.json(box)
    })  

}

exports.register = (req, res) => {

    let box = new Box(req.body)
        box.save()
        res.status(201).send(box) 

}

exports.update = (req, res) => {
        
    Box.findById(req.params.id, (err, box) => {
        box.description = req.body.description
        box.program = req.body.program
        box.content = req.body.content
        box.lirowId = req.body.lirowId

        box.save()
        res.json(box)
    }) 
}


exports.delete = (req, res) => {

    Box.findById(req.params.id, (err, box) => {
        box.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('Box Removed')
            }
        })
    })
}
