const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerScheme = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    owner: {
      required: [true, 'owner is required'],
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
    },
    votersUpId: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    votersDownId: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    vote: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

const Answer = mongoose.model('Answer', answerScheme)
module.exports = Answer