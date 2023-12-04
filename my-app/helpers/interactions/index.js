import axios from 'axios'; 
const Url = 'http://localhost:5000';

export const add_numbers = async (num1, num2) => {
    const response = await axios.post(`${Url}/addNumbers`, {num1, num2});
    return response.data;
}