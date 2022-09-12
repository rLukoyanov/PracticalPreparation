import axios from "axios";
import dotenv from "dotenv";
import querystring from "querystring";

dotenv.config();

export default async (req, res) => {
    const { data } = await axios.post(
        `${process.env.API_URL}/users/create`,
        querystring.stringify({
            email: req.body.enteredEmail,
            password: req.body.enteredPassword,
            first_name: req.body.enteredName,
            last_name: req.body.enteredSurname,
            birthday: req.body.enteredBirthday,
            education_organization: req.body.enteredEducation,
            phone_number: req.body.enteredNumber,
        })
    );

    res.json(data);
};
