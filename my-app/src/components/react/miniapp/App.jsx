import React from 'react'; 
import Navbar from './components/navbar'; 
import Page1 from './components/page1';
import Page2 from './components/page2';
import Index from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(){

    return(
        <main class="bg-blue-700">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>   
            </Router>
        </main>
        )
}