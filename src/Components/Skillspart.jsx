import { forwardRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LuBrainCircuit } from "react-icons/lu";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import "../Style/Skills.css";

const Skillspart = (props, ref) => {
  const [skillsref, inView, entry] = useInView();
  const [animateclassdown, setAnimateClassdown] =
    useState("aboutheadingbefore");
  useEffect(() => {
    if (inView === true) {
      setAnimateClassdown("animate__animated animate__fadeInUp");
    }
  }, [inView]);
  return (
    <>
      <div className="skillpartcontainer">
        <h3 className={`skillspartheading ${animateclassdown}`} ref={ref}>
          TECHNOLOGIES I'VE USED
        </h3>
        <div className="skillsetcontainer" ref={skillsref}>
          <div className={`myallskills ${animateclassdown}`}>
            <ul className="skilllists backendskills">
              <span className="skillicon">
                <BiCodeAlt />
              </span>
              <li className="myskillsheading">
                <h3 className="myskillheader">Backend</h3>
              </li>
              <li className="myskills">Express.js</li>
              <li className="myskills">Node.js</li>
              <li className="myskills">Javascript</li>
            </ul>
            <ul className="skilllists frontendskills">
              <span className="skillicon">
                <TbDeviceDesktopCode />
              </span>
              <li className="myskillsheading">
                <h3 className="myskillheader">Frontend</h3>
              </li>
              <li className="myskills">React.js</li>
              <li className="myskills">HTML5</li>
              <li className="myskills">CSS3</li>
              <li className="myskills">Redux</li>
            </ul>
            <ul className="skilllists databaseskills">
              <span className="skillicon">
                <FaDatabase />
              </span>
              <li className="myskillsheading">
                <h3 className="myskillheader">Database</h3>
              </li>
              <li className="myskills">MongoDB</li>
              <li className="myskills">MySQL</li>
            </ul>
            <ul className="skilllists otherskills">
              <span className="skillicon">
                <LuBrainCircuit />
              </span>
              <li className="myskillsheading">
                <h3 className="myskillheader">Other Skills</h3>
              </li>
              <li className="myskills">Bootstrap</li>
              <li className="myskills">Github</li>
              <li className="myskills">ChakraUI</li>
              <li className="myskills">and Many more...</li>
            </ul>
          </div>
          <div className="myallskills"></div>
          <div className="myallskills"></div>
          <div className="myallskills"></div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Skillspart);
