import React, { useState } from 'react'; 
import Navbar from './navbar';
import { add_numbers } from '../../../../../helpers/interactions';


export default function Page1(){
    const [result, setResult] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const num1 = parseInt(e.target.num1.value);
        const num2 = parseInt(e.target.num2.value);


        try{
            const response = await add_numbers(num1, num2);
            setResult(response.result); 
        }catch(error){
            console.error('Error sending data to the server:', error);
            setResult('Error occurred');

        }
    }
    return(
        <>
            <Navbar />
            <main class="bg-blue-700 min-h-screen flex flex-col items-center">
                <h1 class="text-white text-2xl font-bold mb-4">Page 1</h1>

                <form onSubmit={handleSubmit} class="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
                    <h1 class="text-gray-800 text-xl font-semibold mb-4">Add Two Numbers by Sending Data to a FastAPI Server</h1>
                    <div class="flex flex-col gap-2 mb-4">
                        <label for="num1" class="text-gray-700">Number 1</label>
                        <input type="number" id="num1" name="num1" class="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <div class="flex flex-col gap-2 mb-4">
                        <label for="num2" class="text-gray-700">Number 2</label>
                        <input type="number" id="num2" name="num2" class="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>
                    <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                        Submit
                    </button>
                </form>
                {result && <div class="mt-4 text-white">{result}</div>}
            </main>
        </>

        )
}