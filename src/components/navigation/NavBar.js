import React from "react";
import { useState } from "react";
import MenuDrawer from "@/components/navigation/DrawerMenu";
import IconComponent from "@/components/icon/IconComponents";
import Link from "next/link";

function NavBar() {
    const [drawerState, setDrawerState] = useState(false);
    const [isLogin, isLoggedIn] = useState(false);

    const drawerToggle = () => {
        setDrawerState(!drawerState);
    };
  return (
    <>
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
            <li className="text-light">Search</li>
            <li className="text-light">
              {isLogin ? (
                <a href="/pages">Account</a>
              ) : (
                <a href="/pages">Login</a>
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
              style={{ visibility: "hidden", height: "0", width: "0" }}
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
    </>
  );
}

export default NavBar;
