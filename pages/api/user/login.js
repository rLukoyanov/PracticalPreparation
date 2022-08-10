import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();

export default async (req, res) => {
  const userPoints = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/points/check`,
    querystring.stringify({
      user_id: req.body.id,
    }),
  );

  const userInfo = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/get/info`,
    querystring.stringify({
      user_id: req.body.id,
    }),
  );

  const hoursData = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/points/hours`,
    querystring.stringify({
      user_id: req.body.id,
    }),
  );

  const historyData = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/history`,
    querystring.stringify({
      user_id: req.body.id,
    }),
  );

  res.json({
    userPoints: userPoints.data,
    userInfo: userInfo.data,
    hours: hoursData.data,
    history: historyData.data,
  });
};
