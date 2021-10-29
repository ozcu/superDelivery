const mongoose = require('mongoose')

const DepotSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    addressCoordinates: [],
    couriers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Courier',
        },
    ],
})

const Depot = mongoose.model('Depot', DepotSchema)
module.exports = Depot
