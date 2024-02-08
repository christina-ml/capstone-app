import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import logo from "../../assets/cryptotalk-logo.png";

// import logo component
import NavbarLogo from "./NavbarLogo.js";

// react-icons
import { HiMenu } from "react-icons/hi";
import {
	MdClose,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from "react-icons/md";

// instead of hard-coding menu items, store as JSON
import menuItemData from "./data/menuData.json";

// CryptoTalk Button component
// import Button from '../../cryptotalkComponents/buttons/Button';

// Material UI Button
import Button from "@mui/material/Button";

const NavBar = ({
	darkModeButton,
	setOpenLoginModal,
	loggedIn,
	setLoggedIn
}) => {
	// simple hook setting it to false
	const [collapsedMenuIsOpen, setCollapsedMenuIsOpen] = useState(false);
	const [currentHoverMenu, setCurrentHoverMenu] = useState(null);

	// for toggle button click event
	const [toggleButton, setToggleButton] = useState(null);
	const [toggleText, setToggleText] = useState(null);

	// displaying submenu items
	const [displaySubMenu, setDisplaySubMenu] = useState(true);

	const handleToggleClick = () => {
		setToggleText(!toggleText);
		setToggleButton(!toggleButton);
	};

	// deletes the access token from localStorage, and changes login button text to "log out"
	const logOut = () => {
		// console.log("log out");
		/*
      replacing this with cookie: 
      delete access token from local storage
      localStorage.removeItem('accessToken');
    */

		// delete cookie `accessToken`
		document.cookie =
			"accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

		setLoggedIn(false);
	};

	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to="/">
					<NavbarLogo logo={logo} />
				</Link>
				<div
					className={"navbar__collapsedMenuIcon" + (collapsedMenuIsOpen ? "--active" : "")}
					onClick={() => {
						setCollapsedMenuIsOpen(!collapsedMenuIsOpen);
					}}
				>
					{collapsedMenuIsOpen ? <MdClose /> : <HiMenu />}
                </div>

				{/* navbar links */}
				<div className={"navbar__menuItemData" + (collapsedMenuIsOpen ? "--active" : "") }>
					{menuItemData.map((menuItem, index) => {
						return (
							<div key={menuItem + index} id={index}>
                                {/* desktop view, with menuItems and submenuItems */}
								{(collapsedMenuIsOpen === false) && menuItem.text && menuItem.submenu ? (
									<div
										className="navbar__menuItemData__submenuItem"
										onMouseEnter={() => {
											setDisplaySubMenu(true);
											setCurrentHoverMenu(index);
										}}
										onMouseLeave={() => {
											setDisplaySubMenu(false);
											setCurrentHoverMenu(null);
										}}
									>
										<a href={menuItem.href}>
											{menuItem.text}
											{displaySubMenu &&
											menuItem.submenu &&
											currentHoverMenu === index ? (
												<MdKeyboardArrowUp />
											) : (
												<MdKeyboardArrowDown />
											)}
										</a>

										<div className="submenuItemLink">
											{currentHoverMenu === index &&
												menuItem.submenu.map(
													(submenuItem, subIndex) => {
														// normal submenu item
														return (
															<a
																key={
																	submenuItem +
																	subIndex
																}
																href={
																	submenuItem.submenuHref
																}
															>
																{
																	submenuItem.submenuText
																}
															</a>
														);
													}
												)}
										</div>
									</div>
								) : (
                                    // non-desktop view, with menuItems and submenuItems
									<div className="navbar__menuItemData__menuItem">
										<a href={menuItem.href}>
											{menuItem.text}
										</a>
                                        <div className="navbar__menuItemData__menuItem__nonHoverSubmenuItem">
											{(collapsedMenuIsOpen === true) && menuItem.submenu && 
                                                menuItem.submenu.map(
													(submenuItem, subIndex) => {
														// normal submenu item
														return (
															<a
																key={
																	submenuItem +
																	subIndex
																}
																href={
																	submenuItem.submenuHref
																}
															>
																{
																	submenuItem.submenuText
																}
															</a>
														);
													}
												)}
										</div>
									</div>
								)}
							</div>
						);
					})}
					<div className="navbar__menuItemData__loginAndTheme">
						{loggedIn && (
							<div className="navbar__menuItemData__loginAndTheme__loginLogout">
								<Button variant="text" onClick={logOut}>
									Log Out
								</Button>
							</div>
						)}
						{!loggedIn && (
							<div className="navbar__menuItemData__loginAndTheme__loginLogout">
								<Button
									variant="text"
									onClick={() => setOpenLoginModal(true)}
								>
									Log In
								</Button>
							</div>
						)}
						<div className="navbar__menuItemData__loginAndTheme__themeButton">
							{darkModeButton}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;

// article on creating dropdowns:
// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/

// Block - Element - Modifier (BEM)

// Example: className="navbar__logo"
// block name (double underscore) element name
