import { Router } from 'express';
import passport from 'passport';


const router = Router();

// NOTE: 
// passport.authenticate pass the service we are using to authenticate

router.get('/google', passport.authenticate('google'), 
(req,res) => res.send(200));

router.get('/google/redirect', passport.authenticate('google'),
 (req,res) => res.send(200));

export default router;

