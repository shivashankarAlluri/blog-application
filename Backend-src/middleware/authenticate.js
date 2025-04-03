const jwt=require("jsonwebtoken")
const authenticate = (req, res, next) => {
    const {token} = req.cookies;
    if (!token){
        res.status(401).json({ message: 'Access Denied' });
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = { authenticate };