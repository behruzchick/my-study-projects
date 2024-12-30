const {userModel} = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register = async(req,res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new userModel({
            name: req.body.name,
            email: req.body.email,
            passwordHash: hash
        })

        const isName = await userModel.findOne({name:req.body.name});
        const isEmail = await userModel.findOne({email:req.body.email});

        if(isEmail){
            return res.status(403).json({
                message: "Email arleady used!"
            })
        }


        if(isName){
            return res.status(403).json({
                message: "Name arleady used!"
            });
        }

        if(!req.body.password){
            return res.status(403).json({
                message:"No access!!"
            });
        }

        if (req.body.name.length <= 0) {
            return res.status(403).json({
                message: "Please enter name!"
            });
        }
        if (req.body.email.length <= 0) {
            return res.status(403).json({
                message: "Please enter email!"
            })
        }
        if (req.body.password.length <= 7) {
            return res.status(403).json({
                message: "Password has been 8+ characters"
            });
        }


        if(await req.body.name === "admin" && await req.body.email === "admin@gmail.com" && req.body.password === "admin123"){
            doc.isAdmin = true
        }

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id
            },
            'secret123',
            {
                expiresIn: '20d'
            }
        );
        
        const { passwordHash, ...userData } = user._doc

        res.json({
            ...userData,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
} 

const login = async(req,res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            })
        }

        const pass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if (!pass) {
            return res.status(403).json({
                message: "Wrong password"
            })
        }
        const token = jwt.sign(
            {
                _id: user._id
            },
            'secret123',
            {
                expiresIn: '30d'
            }
        );
        const { passwordHash, ...userData } = user._doc
        res.json({
            ...userData,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

const editUser = async(req,res) => {
    try {
        const user = await userModel.findByIdAndUpdate({_id:req.userId},{
            name:req.body.name,
            email:req.body.email,
        },{
            new:true
        });

        const name =  await userModel.findOne({name:req.body.name});
        const email = await userModel.findOne({email:req.body.email});

        if(email){
            return res.status(403).json({
                message:"Email arleady used!"
            })
        }
        if(name){
            return res.status(403).json({
                message:"Name arleady used!"
            })
        }

        if(req.body.name.length === 0){
            return res.status(403).json({
                message:"Please enter name!"
            })
        }
        if(req.body.email.length === 0){
            return res.status(403).json({
                message:"Please enter email!"
            })
        }

        await user.save();
        
        res.json(user)

        
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            message:"Internal server erorr"
        })
    }
}


const authMe = async(req,res) => {
    try {
        const user = await userModel.findById(req.userId);

        if(!user){
            return res.status(404).json({
                message:"404 User not found"
            })
        }

        const {passwordHash,...userData} = user._doc

        res.json(userData);
    } catch (error) {
        console.log(error);
        return res.status(503).json({
            message:"Internal server erorr"
        })
    }
}


module.exports = {
    register,
    login,
    editUser,
    authMe
}