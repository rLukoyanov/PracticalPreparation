import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/posts/${req.query.newsId}`,
    querystring.stringify({
      event_id: req.query.newsId,
    }),
  );

  res.json(data[0]);
};
