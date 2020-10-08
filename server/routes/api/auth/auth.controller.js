const jwt = require('jsonwebtoken');
const { use } = require('.');
const User = require('../../../models').user;

exports.register = (req,res)=>{
    const {username, password} = req.body;
    
    const create = (user) =>{
        if(user){
            throw new Error('username exists')
        }
        else{
            User.create({s_ID: username, password: password});
            res.json({
                message: 'registered successfully'
            });
        }
    }

    const onError = (error) =>{
        res.status(409).json({
            message: error.message
        });
    }

    User.findOne({where : {s_ID:username}})
    .then(create)
    .catch(onError)
}

exports.login = (req,res)=>{
    const {username, password} = req.body;
    const secrete = req.app.get('jwt-secrete');

    const check = (user)=>{
        if(!user){
            throw new Error('login failed');
        }
        else{
            if(user.dataValues.password===password){
                const p = new Promise((resolve, reject)=>{
                    jwt.sign( //jwt.sign : callback param 전달시 비동기적으로 사용
                        {
                            username: user.dataValues.s_ID
                        },
                        secrete,
                        {
                            expiresIn: '30m'
                        },
                        (err,token)=>{
                            if(err)reject(err);
                            resolve(token);
                        }
                    )
                })
                return p;
            }
            else{
                throw new Error('login failed');
            }
        }
    }
    const respond = (token) =>{
        res.cookie('user',token);
        res.json({
            message:'logged in successfully',
            token
        });
    }

    const onError =(err)=>{
        res.status(403).json({
            message: err.message
        })
    }

    User.findOne({where : {s_ID:username}})
    .then(check)
    .then(respond)
    .catch(onError)
}

exports.check = (req,res)=>{
    res.json({
        success: true,
        info: req.decoded
    })
}