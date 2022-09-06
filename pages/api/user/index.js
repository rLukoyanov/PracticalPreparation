import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async (req, res) => {
    const { data } = await axios.get(
        `${process.env.API_URL}/users/current?user_id=${req.body.userId}`
    );

    console.log(req.body.userId);
    res.json(data);
};
