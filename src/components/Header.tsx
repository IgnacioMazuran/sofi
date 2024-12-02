import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Menu = () => {
  const { navigation } = config;

  return (
    <>
      <svg
        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 50 50"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div className="relative pt-1 px-2 sm:px-4 lg:px-2">
          <nav
            className="relative flex items-center justify-between sm:h-8 lg:justify-start"
            aria-label="Global"
          >
            {/* Logo Section */}
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                {/* Mobile Menu Button */}
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-background rounded-md p-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-5 w-5" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:block md:ml-8 md:pr-2 md:space-x-6">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900 text-sm" // Reduced text size
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        ></Transition>
      </Popover>
    </>
  );
};

export default Menu;
