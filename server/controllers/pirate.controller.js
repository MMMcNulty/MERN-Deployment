const { response } = require('express')
const { Pirate } = require('../models/pirate.model')


module.exports.index = (request, response) => {
    response.json({
        message: "Hello it's working 🧨"
    })
}

//Create One
module.exports.createPirate = (request, response) => {
    const {name, image_url, number_of_chests, catch_phrase, crew_position, peg_leg, eye_patch, hook_hand} = request.body;
    Pirate.create({
        name,
        image_url,
        number_of_chests,
        catch_phrase,
        crew_position,
        peg_leg,
        eye_patch,
        hook_hand
    })
        .then(pirate =>response.json(pirate))
        .catch(error=>response.status(400).json(error))
}
//READ ALL
module.exports.getAllPirates = (request, response) => {
    Pirate.find()
        .then(allPirates => response.json(allPirates))
        .catch(err => response.json({ message: "error", error: err }))
}

//Find One
module.exports.findOne = (request, response) => {
    Pirate.findById(request.params.id)
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
}

//UPDATE
module.exports.updatePirate = (request, response) => {
    Pirate.findByIdAndUpdate(
        {_id: request.params.id},
        request.body,
        { new: true, runValidators: true}
        )
    .then(updatedPirate => response.json(updatedPirate))
    .catch(error=>response.status(400).json(error))
}

module.exports.delete = (request, response) => {
    Pirate.findByIdAndDelete(request.params.id)
        .then( result => response.json({result: result}))
        .catch( err => response.json({err:err}))
}