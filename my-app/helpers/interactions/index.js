import axios from 'axios'; 
const Url = 'http://localhost:8000';

export const add_numbers = async (number1, number2) => {
    const response = await axios.post(`${Url}/addNumbers`, {number1, number2});
    return response.data;
}