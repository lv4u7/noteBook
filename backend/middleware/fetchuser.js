import jwt from "jsonwebtoken";

const JWT_SECRET = "mee464";

export const fetchuser = (req,res,next) => {
    //get the token from header to get the user to find users id
    const token = req.header('x-auth-token');
    //hedaders name ,, use this name
    if(!token){
        return res.status(401).send({error: "use a valid token"})
    }
    try {
    const string = jwt.verify(token,JWT_SECRET);
    req.user = string.user;
    next();
    } 
    catch(err) {
        res.status(401).send({error: "use a valid token"})
    }
}