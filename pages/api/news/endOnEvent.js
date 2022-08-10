import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/end/event/${req.body.newsId}`,
    querystring.stringify({
      user_id: req.body.user_id,
      event_id: req.body.newsId,
    }),
  );

  const pointData = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/add/points`,
    querystring.stringify({
      user_id: req.body.user_id,
    }),
  );

  console.log(pointData.data);

  res.json({ data });
};
