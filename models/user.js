const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    email: String,
    telephone: String,
    address: String,
    addressGeolocation: [],
    creditCardInfo: String,
    basket: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'basket',
        // autopopulate: {maxDepth:2}
      },
    ],
    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order',
        //autopopulate: true  { maxDepth: 2 },
      },
    ],
  },
  { timestamps: true },
)
//UserSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('User', UserSchema)
