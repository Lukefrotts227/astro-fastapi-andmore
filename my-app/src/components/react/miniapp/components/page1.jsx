import React from 'react'; 
import Navbar from './navbar';
import { add_numbers } from '../../../../../helpers/interactions';


export default function Page1(){
    return(
        <main class="bg-blue-700">
            <Navbar />
            <h1>Page 1</h1>
            <form>
                <h1>Add Two numbers by sending data to a fastapi server</h1>
                <label for="num1">Number 1</label>
                <input type="number" id="num1" name="num1" />
                <label for="num2">Number 2</label>
                <input type="number" id="num2" name="num2" />
                <input type="submit" value="Submit" />
            </form>
        </main>
        )
}