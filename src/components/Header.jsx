import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-teal-300">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-300">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
