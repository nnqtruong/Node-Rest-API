const router = require("express").Router();
<<<<<<< HEAD
const User = require("../models/User");

//REGISTER
router.post ("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(req.body.password,salt);
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        console.log(err);


    }
});

module.exports = router;
=======

router.get("/",(req,res)=>{
    res.send("Hey it is auth route")
})

module.exports = router
>>>>>>> d1eaae9 (Remove node_modules from repository)
