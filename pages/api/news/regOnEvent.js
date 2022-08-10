import axios from 'axios';
import FormData from 'form-data';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  const formData = new FormData();
  formData.append('user_id', req.body.user_id);
  formData.append('event_id', req.body.event_id);
  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/prereg/event/${req.body.event_id}`,
    formData,
    { headers: formData.getHeaders() },
  );

  res.json(data);
};
