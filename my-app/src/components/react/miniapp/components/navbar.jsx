import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 justify-center">
        <li className="text-white font-semibold">
          <Link to="/" className="hover:text-gray-300">Index</Link>
        </li>
        <li className="text-white font-semibold">
          <Link to="/page1" className="hover:text-gray-300">Page1</Link>
        </li>
        <li className="text-white font-semibold">
          <Link to="/page2" className="hover:text-gray-300">Page2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
