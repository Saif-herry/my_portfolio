import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";

import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  // ✅ Direct Resume Open + Download Function
  const handleResumeDownload = (e) => {
    e.preventDefault(); // stop the anchor from navigating away

    const viewUrl =
      "https://drive.google.com/file/d/1f6EPMhafzoxsUQBIqjtH6EVNu9h7nkbw/view"; // Preview link
    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1f6EPMhafzoxsUQBIqjtH6EVNu9h7nkbw"; // Direct download link

    // 1️⃣ Open preview tab immediately (prevents popup blocker)
    window.open(viewUrl, "_blank");

    // 2️⃣ Trigger download slightly after opening new tab
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Mohammad_Saif_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300); // small delay is enough

    // Close mobile nav after click
    setShowNavList(false);
  };

  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            {/* ✅ Resume Direct Open + Download */}
            <a
              href="/resume"
              onClick={handleResumeDownload}
              className="link link--nav"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
