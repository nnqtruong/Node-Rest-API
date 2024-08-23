const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("Hey it is auth route")
})

module.exports = router