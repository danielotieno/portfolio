import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import { shadow } from "../../styles/utils/shadow.js";

import { Link } from "react-scroll";
const StyledNavbar = styled.ul`
  color: #ffffff;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #faa627;
  height: 70px;
  width: 100%;
  ${shadow};

  > a {
    font-size: 18px;
    margin-right: 20px;
    cursor: pointer;
    cursor: pointer;
    color: #ffffff;
    transition: all 0.4s ease;
    &:hover {
      color: #333;
      background-size: 100% 100%;
      transition: all 0.4s ease;
    }
  }
`;

const Navbar = () => (
  <Headroom>
    <StyledNavbar>
      <Link to="about" smooth={true} offset={-10} duration={200} spy={true}>
        <li>About</li>
      </Link>

      <Link to="skills" smooth={true} offset={-25} duration={200} spy={true}>
        <li>Skills</li>
      </Link>

      <Link to="projects" smooth={true} offset={-5} duration={200} spy={true}>
        <li>Projects</li>
      </Link>
    </StyledNavbar>
  </Headroom>
);

export default Navbar;
