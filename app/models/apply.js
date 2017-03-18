var mongoose=require('mongoose')
var ApplySchema=require('../schemas/apply.js')
var Apply=mongoose.model('Apply',ApplySchema)
module.exports=Apply