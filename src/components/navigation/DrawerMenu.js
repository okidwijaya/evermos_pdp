'use client'
import React from 'react';
import Link from 'next/link'

function MenuDrawer() {
  return (
    <div className="w-full drawer-menu_menu-items">
        <ul className="drawer-menu_list drawer-menu_list--items grid_col-1">
            <li className="drawer-menu_list--item">
              <Link href="pages/">
                Shop All
              </Link>
            </li>
            <li className="drawer-menu_list--item">
              <Link href="pages/collection">
                About
              </Link>
            </li>
            <li className="drawer-menu_list--item">
              <Link href="/pages/collection">
                New Arrivals
              </Link>
            </li>
            <li className="drawer-menu_list--item">
              <Link href="/pages/collection">
                Best Seller
              </Link>
            </li>
        </ul>
        <ul className="drawer-menu_list drawer-menu_list--items grid_col-1">
            <li className="drawer-menu_list--item text-light">Privacy Policy</li>
            <li className="drawer-menu_list--item text-light">Contact</li>
        </ul>
        <ul className="drawer-menu_list grid_col-1">
            <li className="drawer-menu_list--item">
              <Link href="pages/user/login">
                [*Login]
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default MenuDrawer;