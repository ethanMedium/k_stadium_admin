// react
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

// src
const navigationBase = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Monitor", href: "/monitor", current: false },
  { name: "Report", href: "/report", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header({ isLogged, authService, setIsLogged }) {
  const [navigation, setNavigation] = useState(navigationBase);
  const navigate = useNavigate();
  // header tab switcher
  const currentTab = (e) => {
    let tab = e.target.text;
    let turnOn = navigation.findIndex((item) => item.name === tab);
    let turnOff = navigation.findIndex((item) => item.current === true);
    let copiedNav = [...navigation];
    copiedNav[turnOff].current = false;
    copiedNav[turnOn].current = true;
    setNavigation(copiedNav);
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <Link className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="K STADIUM"
                      />
                    </Link>
                    <div className="hidden md:flex justify-between">
                      {isLogged ? (
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                              onClick={currentTab}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="text-gray-300 hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium">
                          Welcome To K STADIUM
                        </div>
                      )}
                    </div>
                  </div>
                  {isLogged ? (
                    <div
                      className="text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() =>
                        authService.signOut().then(() => {
                          setIsLogged(false);
                          return navigate("/login");
                        })
                      }
                    >
                      Sign Out
                    </div>
                  ) : (
                    <div
                      className="text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => navigate("/login")}
                    >
                      Sing In
                    </div>
                  )}
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

export default Header;
