const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionScheme = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required']
    },
    question: {
      type: String,
      required: true
    },
    author: {
      required: [true, 'author is required'],
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    vote: {
      type: Number,
      default: 0, 
    },
    answer: [{
      type: Schema.Types.ObjectId,
      ref: 'Answer'
    }],
    votersUpId: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    votersDownId: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    tags: String
  },
  {
    timestamps: true
  }
)

const Question = mongoose.model('Question', questionScheme)
module.exports = Question