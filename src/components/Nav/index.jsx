import React, { useState } from "react";
import { Link, NavContainer } from "./styles";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActive] = useState("#");

  const handleSetActiveNav = (hash) => setActive(hash);

  return (
    <NavContainer>
      <Link
        className={activeNav === "#" ? "active" : ""}
        href="#"
        onClick={() => handleSetActiveNav("#")}
      >
        <AiOutlineHome />
      </Link>
      <Link
        className={activeNav === "#about" ? "active" : ""}
        href="#about"
        onClick={() => handleSetActiveNav("#about")}
      >
        <AiOutlineUser />
      </Link>
      <Link
        className={activeNav === "#experience" ? "active" : ""}
        href="#experience"
        onClick={() => handleSetActiveNav("#experience")}
      >
        <BiBook />
      </Link>
      <Link
        className={activeNav === "#services" ? "active" : ""}
        href="#services"
        onClick={() => handleSetActiveNav("#services")}
      >
        <RiServiceLine />
      </Link>
      <Link
        className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
        onClick={() => handleSetActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </Link>
    </NavContainer>
  );
};

export default Nav;
