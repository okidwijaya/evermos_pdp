import React, { useEffect } from "react";
import { useState } from "react";
import MenuDrawer from "@/components/navigation/DrawerMenu";
import IconComponent from "@/components/icon/IconComponents";
import Link from "next/link";
import '@/app/page.module.css'

function NavBar() {
    const [drawerState, setDrawerState] = useState(false);
    const [isLogin, isLoggedIn] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const drawerToggle = () => {
        setDrawerState(!drawerState);
    };

    const handleStickyNavigation = () => {
      console.log(window.scrollY)
      window.scrollY > 1 ? setSticky(true) : setSticky(false);
    }

    useEffect(() => {
      window.addEventListener('scroll', handleStickyNavigation)
    },[])
  return (
    <div className={`${isSticky ? 'stickyNavigationTop' : ''}`}>
      <nav className="grid grid_cols-3 w-full">
        <div onClick={drawerToggle} className="drawer-menu_toggle">
          <IconComponent
            name="GiHamburgerMenu"
            size="20px"
            color="#121212"
            className=""
          />
        </div>
        <div className="text-align-center w-full">
          <Link href="/">
            <h2>Holla!</h2>
          </Link>
        </div>
        <div className="top-navigation_right-menu">
          <ul className="top-navigation_right-menu--list">
            <li className="text-light searchButtonNavbar">Search</li>
            <li className="text-light loginButtonNavbar">
              {isLogin ? (
                <Link href="/pages">Account</Link>
              ) : (
                <Link href="/pages">Login</Link>
              )}
            </li>
            {isLogin ? (
              <li className="w-max">
                <button className="mx-auto" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="" style={{ display: "none" }}></li>
            )}
            <li
              className="text-light"
              style={{ display: "none"}}
            >
              Cart
            </li>
          </ul>
        </div>
      </nav>
      {drawerState ? (
          <div
            style={{
              backgroundColor: "#181818b3",
              display: drawerState ? "block" : "none",
            }}
            className="drawer-wrapper"
          >
            <div
              className="w-full text-align-right"
              style={{padding: "8px 16px"}}
            >
              <button onClick={drawerToggle} className="text-light">
                [close]
              </button>
            </div>
            <MenuDrawer />
          </div>
        ) : null}
    </div>
  );
}

export default NavBar;
