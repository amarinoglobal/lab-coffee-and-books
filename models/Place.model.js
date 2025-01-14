const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({

    name: {
        type: String,

    },
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeOfPlace'
    }],
    location: {

        type: {

            type: String
        },
        coordinates: [Number]
    }

})


placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema)

module.exports = Place