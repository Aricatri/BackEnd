import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers; // Token en los headers
        if (!atoken) {
            return res.status(401).json({ success: false, message: 'Not Authorized' });
        }
        const tokenDecode = jwt.verify(atoken, process.env.JWT_SECRET);
        if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        next(); // Continuar con la solicitud
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export default authAdmin;
