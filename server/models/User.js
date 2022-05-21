const {Schema, model} = require("mongoose")

const  User = new Schema({
    email:{type :String, required:true, unique:true},
    password:{type:String, required: true},
    name:{type:String, required: true},
    number:{type:String, required: true},
    gender:{type:String, required: true}
})


module.exports = model('User', User)