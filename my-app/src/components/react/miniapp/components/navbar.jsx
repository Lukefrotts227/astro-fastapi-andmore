import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="bg-blue-500 p-4">
      <ul class="flex space-x-4 justify-center">
        <li class="text-white font-semibold">
          <Link to="/entry" class="hover:text-gray-300">Index</Link>
        </li>
        <li class="text-white font-semibold">
          <Link to="/entry/page1" class="hover:text-gray-300">Page1</Link>
        </li>
        <li class="text-white font-semibold">
          <Link to="/entry/page2" class="hover:text-gray-300">Page2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
