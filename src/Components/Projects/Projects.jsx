import React from "react";
import "./Projects.css";
import { FaHardHat, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiBootstrap,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  
} from "react-icons/si";
import{FaReact} from "react-icons/fa";
import {SiChakraui} from "react-icons/si";
import {SiRedux} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/proj-1.png";
import project2 from "../../assets/proj-2.png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="data:image/jpeg;base64,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"
 />
                </div>
              </div>
              <div className="project_information">
                <h2>hellobonsai</h2>
                <p>
                Basically, hellobonsai.com is a Freelance website. Where you can add your client and their projects as well. And you can send the Total Invoice to that particular client. 
                </p>
                <div>
                < FaReact />
                <SiExpress />
                  <SiChakraui />
                  <SiMongodb />
                  
                  <FaNodeJs />
                </div>
                <div>
                  <a
                    href="https://productive-frog-3801.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Saif-herry/productive-frog-3801"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img style={{height:"264px"}} src={project2} />
                </div>
              </div>
              <div className="project_information">
                <h2>Bigbasket</h2>
                <p>
                Bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence.
                </p>
                <div>
                  
                  <FaReact />
                  <IoLogoJavascript />
                  <SiRedux />
                  <FaNodeJs />
                  <DiCss3 />
                  
                </div>
                <div>
                  <a 
                    href="https://big-basket-clone-by-masai-school.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Saif-herry/Big-basket-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              
              <div className="project_videocontainer">
                <div>
                  <img src={project1} style={{height:"240px"}}
                    alt=""
                  />
                </div>
              </div>


              <div className="project_information">
                <h2>Beminimalist</h2>
                <p>
                An e-commerce website that provide Skin care products.All products undergo a thorough safety assessment before hitting the market.
                </p>
                <div>
                <SiJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://regal-scone-4e45cf.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Saif-herry/beminimalist-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img style={{height:"240px"}}
                    src="https://cdn4.vectorstock.com/i/1000x1000/31/93/realistic-weather-icons-on-transparent-vector-22853193.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                Weather apps enable users to get instant alerts regarding weather conditions. Weather apps are the simplest method to know about the updates of the upcoming weather.
                </p>
                <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiBootstrap />
                  <DiCss3 />
                  <FaNodeJs />
                </div>
                <div>
                  <a
                    href="https://luminous-begonia-833e32.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Saif-herry/Weather_App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*  <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>DropBox Clone -Backend</h2>
                <p>
                  Backend API for a google drive like app built using NodeJS,
                  Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                  operations for users, files and folders.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
