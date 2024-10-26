//=== Create User
export const Registration = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "Registration Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}

//=== User Login
export const Login = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "ngo user Login Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}


//=== User Login
export const Logout = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "ngo user Logout Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}

//=== User profile
export const UserProfileUpdate = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "User Profile Update Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}


//=== User profile
export const UserProfileRead = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "User Profile Read Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}