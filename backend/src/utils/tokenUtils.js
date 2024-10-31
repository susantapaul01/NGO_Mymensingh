import jwt from 'jsonwebtoken';
import { JWT_EXPIRE_TIME, JWT_KEY } from '../config/config.js';

export const TokenEncode = (email, role, user_id) => {
    // console.log(email, user_id);
    let PAYLOAD = {'email': email, 'role': role, 'user_id': user_id};
    let secret = JWT_KEY;
    let expireTime = { expiresIn: JWT_EXPIRE_TIME };
    let token = jwt.sign(PAYLOAD, secret, expireTime);
    return token;
}

export const TokenDecode = (token) => {
    try {
        let decode = jwt.verify(token, JWT_KEY);
        // console.log('Token Decode successful');
        return decode;
    }
    catch(error) {
        return null;
    }
}