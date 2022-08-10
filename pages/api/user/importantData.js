import axios from 'axios';
import querystring from 'querystring';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.WP_API_URL}/users/me`,
    {},
    {
      auth: {
        username: req.body.login,
        password: req.body.password,
      },
    },
  );
  const imageData = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/get/photo`,
    querystring.stringify({
      user_id: data.id,
    }),
  );

  res.json({ data, avatar: imageData.data });
};
