//Paper Model
const mongoose = require('mongoose')

const paperSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }
    ,
    
    paper_title: {
      type: String
  },
  authors: {
      type: String
  },
  keywords: {
      type: String
  },
  abstract: {
      type: String
  },
  pdf_attachment: {
    type: String
},
submitted_by_author: {
  type: String
},
paper_identifier:{
  type: Number
}
  },
  {
    timestamps: true,
  }
  
)

module.exports = mongoose.model('Paper', paperSchema)