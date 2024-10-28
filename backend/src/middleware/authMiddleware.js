import { TokenDecode } from "../utils/tokenUtils.js";

export default (req, res, next) => {
    let token = req.cookies['Token'];
    let decodedToken = TokenDecode(token);
    // console.log(decodedToken)
    if(decodedToken ===null) {
        return res.status(401).json({ status: false, message: "Invalid Token"});
    }
    else {
        let email = decodedToken['email'];
        let user_id = decodedToken['user_id'];
        req.headers['email'] = email;
        req.headers['user_id'] = user_id;
        next();
    }
}