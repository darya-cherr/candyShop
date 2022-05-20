const {Schema, model} = require("mongoose")

const  User = new Schema({
    email:{type :String, required:true, unique:true},
    password:{type:String, required: true},
    name:{type:String},
    number:{type:String},
    gender:{type:String}
})


module.exports = model('User', User)