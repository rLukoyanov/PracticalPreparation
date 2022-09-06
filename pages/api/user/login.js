import axios from "axios";
import dotenv from "dotenv";
import querystring from "querystring";

dotenv.config();

export default async (req, res) => {
    const userId = await axios.post(
        `${process.env.API_URL}/users/login`,
        querystring.stringify({
            user_login: req.body.enteredLogin,
            password: req.body.enteredPassword,
        })
    );

    res.json({
        userId: userId.data,
    });
};
