import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async (req, res) => {
    const { data } = await axios.get(
        `${process.env.API_URL}/vacancy/get?id=${req.body.vacancyId}`
    );

    const refactoringData = {
        address: data.adress,
        contacts: data.contacts,
        description: data.description,
        expTime: data.minimal_exp_time,
        responses: data.number_of_responses,
        salary: data.salary,
        title: data.vacancy_name,
    };

    res.json(refactoringData);
};
