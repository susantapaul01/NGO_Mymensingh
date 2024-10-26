export const CreateNgoProfile = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "Create Ngo Profile Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}


export const CreateNgoProfileDetails = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "Create Ngo Profile Details Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}



export const NgoProfileview = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "Ngo Profile view Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}



export const CreateNgoReport = async (req, res) => {
    try {
        return res.json({
            status: 'success', message: "Create Ngo Report Successful"
        })
    }
    catch(e) {
        return res.json({ status: 'fail', message: e.toString()});
    }
}