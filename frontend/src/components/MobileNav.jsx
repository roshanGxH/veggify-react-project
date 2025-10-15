import React, { useState } from 'react';
import logo from '/logo.svg';
import DesktopNav from './header/DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const [hideLeft, setHideLeft] = useState('-left-[1000px]');
  const menuItems = ['recipes', 'resources', 'about', 'contact'];

  const onOpen = () => {
    setHideLeft('left-0');
  };

  const onClose = () => {
    setHideLeft('-left-[1000px]');
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} Logo={logo} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          Logo={logo}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
        <ul className='flex items-center gap-4 font-medium mt-4'>
            <li>
                <button className = 'text-secondary py-2 px-4 rounded'>Log In</button>
            </li>
            <li>
                <button className = 'text-secondary py-2 px-4 rounded'>Sign Up</button>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
