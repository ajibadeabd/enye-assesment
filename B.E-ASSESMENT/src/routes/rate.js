import express  from 'express'
const  router = express.Router();
import rateCtrl  from '../controller/rateCntroller.js'
import  passport from  'passport'
const auth = passport.authenticate('jwt',{session:false})

/* GET home page. */

// registeration route
router.get("/rates",rateCtrl.rate);

//

export default  router;
