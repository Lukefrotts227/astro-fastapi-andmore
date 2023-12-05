import axios from 'axios'; 
const url = 'http://localhost:8000';

export const add_numbers = async (number1, number2) => {
    try {
        const response = await axios.post(`${url}/addNumbers`, {
            number1,
            number2
        });
        return response.data; // The response data will contain the result
    } catch (error) {
        console.error('Error making the request:', error);
        throw error; // Or handle the error as needed
    }
};