import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { data } = await axios.post(
      `${process.env.WP_API_URL}/users`,
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      {
        auth: {
          username: process.env.ADMIN_LOGIN,
          password: process.env.ADMIN_PASSWORD,
        },
      },
    );

    res.json(data);
  }
};
