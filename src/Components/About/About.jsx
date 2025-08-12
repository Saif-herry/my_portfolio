import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import DescriptionIcon from "@mui/icons-material/Description";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";

export const About = () => {
  const handleResumeDownload = () => {
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
    }, 500); // half-second delay
  };

  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Mohammad Saif</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on 10+ projects till now.
        </p>

        <div className="about__contact center">
          <a
            href="https://github.com/Saif-herry?tab=repositories"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:saifsami321md@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918434917976"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-saif123/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* ✅ Resume button opens new tab & downloads */}
        <button
          className="btnResume "
          onClick={handleResumeDownload}
          style={{ marginRight: 10 }}
        >
          Resume
        </button>
      </div>

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
