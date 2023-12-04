import React from 'react'; 
import Page1 from './components/page1';
import Page2 from './components/page2';
import Index from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(){

    return(
        <main class="bg-blue-700 w-1/2 h-full text-center"> 
            <Router>       
                <Routes>
                    <Route path="/entry" element={<Index />} />
                    <Route path="/entry/page1" element={<Page1 />} />
                    <Route path="/entry/page2" element={<Page2 />} />
                </Routes>   
            </Router>
        </main>
        )
}