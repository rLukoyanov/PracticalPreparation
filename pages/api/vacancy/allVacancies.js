import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async (req, res) => {
    const { data } = await axios.get(`${process.env.API_URL}/vacancy/get/all`);
    res.json(data);
};
