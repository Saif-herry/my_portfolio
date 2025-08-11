import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header
        style={{
          position: "fixed", // now fixed at the top
          top: 0, // stick to very top
          left: 0,
          right: 0,
          zIndex: 999, // above all other content
          backgroundColor: "inherit", // match theme background
          width: "100%", // full width
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <div
          className={"header center " + themename}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 40,
            width: "100%",
          }}
        >
          <h3>
            <a
              href="#home"
              className="link"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>
                <img
                  src={logo}
                  alt=""
                  style={{ width: "30px", marginRight: "4px" }}
                />
              </span>
              <span>Mohammad Saif</span>
            </a>
          </h3>
          <Navbar />
        </div>
      </header>

      {/* Push page content down so it's not hidden behind the fixed header */}
      <div style={{ height: "7em" }} />
    </>
  );
};
