import axios from "axios";
import dotenv from "dotenv";
import querystring from "querystring";

dotenv.config();

export default async (req, res) => {
    const { data } = await axios.post(
        `${process.env.API_URL}/users/exp/create`,
        querystring.stringify({
            user_id: req.body.userId,
            position: req.body.expPosition,
            description: req.body.description,
            company: req.body.company
        })
    );

    res.json(data);
};
