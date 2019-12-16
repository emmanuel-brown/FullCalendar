const Router = require('express').Router()
const auth = require('../middleware/auth')
const User = require('../model/user.model')

Router.post('/signup', auth, async (req, res) =>{
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch(e){
        res.status(400).send(e)
    }
})

Router.post('/login', async (req, res) =>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch {
        res.status(400).send()
    }
})

Router.patch('/update/:id', async (req, res) =>{
    const upadates = Object.keys(req.body)
    const allowedUpadates = [ 'name', 'email', 'password' ]
    const isValidOperation = upadates.every(update => allowedUpadates.includes(update))

    if(isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try{
        const user = User.findById(req.params.id)
        
        upadates.forEach(update => user[update] = req.body[upadate])
        await user.save()

        if(!user) {
            return res.status(404).send()
        }
    } catch(e){

    }
})

module.exports = Router