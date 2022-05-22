const Router = require("express");
const User = require("../models/User")

const Account = require("../models/Account")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const{check, validationResult} = require("express-validator")
const router = new Router()



router.post('/registration',
    [check('name',"Incorrect email"),
        check('email',"Incorrect email").isEmail(),
        check('password',"Password must be longer than 3 and shorter than 12").isLength({min:3, max :12}),
     //   check('name',"Password must be longer than 3 and shorter than 12"),
        check('number',"Password must be 12").isLength(12)
    ],
    async (req,res) =>{
    try{
        console.log(req.body)
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message:'Incorrect request',errors })
        }
        const {name,
            email,
            password,
            
            number} = req.body

        const candidate = await User.findOne({email})

        if(candidate){
            return res.status(400).json({message:'User with email ${email} already exist' })
        }

        const hashPassword = await bcrypt.hash(password,8)

        const user = new User({name,email, password:hashPassword, number })

        await user.save()
        return res.json({message:"User was created"})
    }catch(e){
        console.log(e)
        res.send({message:"Server error"})
    }
})


router.post('/login',
    async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

module.exports = router
