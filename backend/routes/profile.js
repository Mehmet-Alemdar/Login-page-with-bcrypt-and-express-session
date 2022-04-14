const router = require("express").Router()
const { UserService } = require("../services")

router.get("/", async(req,res) => {
  try {
    const { id } = req.query

    const user = await UserService.find(id)
    
    if(user) {
      res.send(user)
    }else{
      res.status(203).json({msg: "The user not found at this id"})
    }
  }catch (err) {
    res.status(203).json({msg: "The user not found at this id"})
  }
})

module.exports = router