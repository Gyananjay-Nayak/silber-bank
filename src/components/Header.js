import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../assets/css/header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { US, FR } from "country-flag-icons/react/3x2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXing } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const languages = [
    {
      code: "EN",
      name: "English",
      icon: <US title="United States" className="flag-icon" />,
    },
    {
      code: "FR",
      name: "French",
      icon: <FR title="France" className="flag-icon" />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Navbar expand="md" className="header px-4">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <FontAwesomeIcon icon={faXing} className='logo' />
          Silber Private Bank
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#">Our Bank</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Investment Research</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Other Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Financing</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret outline className="header-btn me-3">
                  {selectedLanguage.icon} {selectedLanguage.code}
                </DropdownToggle>
                <DropdownMenu>
                  {languages.map((language) => (
                    <DropdownItem
                      key={language.code}
                      onClick={() => setSelectedLanguage(language)}
                    >
                      {language.icon}
                      {language.code}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              <Button className="header-btn primary-bg me-3 header-btn-text">Log In</Button>
            </NavItem>
            <NavItem>
              <Button outline className="header-btn me-3 header-btn-text">
                Open Account
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
