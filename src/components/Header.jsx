import React from 'react';
import { ReactComponent as Logo } from '../images/wars.svg'; // adjust the path to your SVG file

export function Header() {
  return (

    <header className="search-div">
      <Logo />
      <input className="user-input" type="text" placeholder="Type here..." />
      <button className="search-button">Search</button>
    </header>
  );
}

