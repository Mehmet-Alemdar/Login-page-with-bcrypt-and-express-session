const router = require("express").Router()
const { UserService } = require("../services")
const { matchedPassword } = require("../lib/bcrypt")

router.get("/", (req,res) => {
  res.send("login page")
})

router.post("/", async(req, res) => {
  try {
    const object = req.body.user
    
    const user = await UserService.findByEmail(object.email)
    if(user){
      const matched = await matchedPassword(object.password, user.password)

      if(matched){
        res.status(200).send(user)
      }else{
        res.status(203).send("Wrong password")
      }
    }else {
      res.status(203).send("The user not found")
    }
  } catch(err) {
    res.send({ msg: err })
  }

})

module.exports = router