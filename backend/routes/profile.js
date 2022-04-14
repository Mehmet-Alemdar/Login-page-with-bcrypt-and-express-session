const router = require("express").Router()
const { UserService } = require("../services")

router.get("/", async(req,res) => {
  try {
    const { id } = req.query
    
    const user = await UserService.find(id)
    
    if(user) {
      res.status(200).send(user)
    }else{
      res.status(203).send("The user not found at this id")
    }
  }catch (err) {
    res.status(203).send("The user not found at this id")
  }
})

module.exports = router