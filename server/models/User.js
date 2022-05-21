const {Schema, model} = require("mongoose")

const  User = new Schema({
    name:{type:String, required: true},
    email:{type :String, required:true, unique:true},
    gender:{type:String, required: true},
    number:{type:String, required: true},
    password:{type:String, required: true}
})


module.exports = model('User', User)