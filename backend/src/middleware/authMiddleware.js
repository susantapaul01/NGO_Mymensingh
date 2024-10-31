import { TokenDecode } from "../utils/tokenUtils.js";

export const authenticateToken = (req, res, next) => {
    let token = req.cookies['Token'];
    let decodedToken = TokenDecode(token);
    // console.log(decodedToken)
    if(decodedToken ===null) {
        return res.status(401).json({ status: false, message: "Invalid Token"});
    }
    else {
        let email = decodedToken['email'];
        let user_id = decodedToken['user_id'];
        let role = decodedToken['role'];
            req.headers['email'] = email;
            req.headers['role'] = role;
            req.headers['user_id'] = user_id;
            next();
    }
}

export const authorizeAdmin = (req, res, next) => {
    let token = req.cookies['Token'];
    let decodedToken = TokenDecode(token);
    if(decodedToken === null) {
        return res.status(401).json({ status: false, message: "Invalid Token"});
    }
    else {
        // let email = decodedToken['email'];
        // let user_id = decodedToken['user_id'];
        if(decodedToken['role'] !== 'admin') {
            return res.status(403).json({ message: "Admin access required" });
        }
        next()
    }
}