const router = require("express").Router()

function ensureAuthentication(req, res, next) {
  if (req.session.authenticated) {
    return next();
  } else {
    res.status(203).send("You're not authorized to view this page");
  }
}

router.get("/", ensureAuthentication, async(req,res) => {
  try {
    const user = req.session.user
    
    if(user) {
      res.status(200).send(user)
    }else{
      res.status(203).send("The user not found at this id")
    }
  }catch (err) {
    res.status(203).send("The user not found at this id")
  }
})

router.post("/logout", (req, res) => {
  try {
    req.session.destroy()
    res.clearCookie('connect.sid')
    res.status(200).send("ok")
  }catch(err) {
    res.status(500).send("Something went wrong")
  }
})

module.exports = router