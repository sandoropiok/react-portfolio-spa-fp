import React from 'react';

function Header() {
  return (
    <header className="">
      <nav className="">
        <ul className="">
          <li>
            <a href="#about" className="">About</a>
          </li>
          <li>
            <a href="#skills" className="">Skills</a>
          </li>
          <li>
            <a href="#projects" className="">Projects</a>
          </li>
          <li>
            <a href="#contact" className="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
