import {forwardRef,useState,useEffect} from "react";
import {useInView} from 'react-intersection-observer'
import "../Style/About.css";


const Aboutpart = (props, ref) => {
  const [aboutref, inView, entry] = useInView();
  const [animateclassdown, setAnimateClassdown] = useState('aboutheadingbefore');
  const [animateclassleft, setAnimateClassleft] = useState('aboutheadingbefore');
  useEffect(() => {
    if (inView === true) {
      setAnimateClassdown('aboutheadingafter animate__animated animate__fadeInUp');
      setAnimateClassleft('animate__animated animate__fadeInUp')
    }
  }, [inView]);
  return (
    <>
      <div className="aboutcontainer">
        <h3 className={`${animateclassdown}`} ref={ref}>ABOUT</h3>
        <div className="subaboutcontainer">
          <div className={`aboutpartdatacontainer ${animateclassleft}`}>
            <h4 className="aboutsubheading" ref={aboutref}>
              A dedicated Fullstack Developer based in Delhi, India 📍
            </h4>
            <p className="aboutpart">
              🌟Passionate{" "}
              <span className="aboutparthighlighter">
                {" "}
                MERN stack web developer
              </span>{" "}
              with expertise in designing robust and efficient web applications.
              Skilled in <span className="aboutparthighlighter">
                {" "}
                React.js
              </span>{" "}
              for interactive interfaces and{" "}
              <span className="aboutparthighlighter">Redux</span> for seamless
              data flow.
            </p>
            <p className="aboutpart">
              {" "}
              🌟Proficient in{" "}
              <span className="aboutparthighlighter">Node.js</span> and{" "}
              <span className="aboutparthighlighter">Express.js</span> for
              backend development, with
              <span className="aboutparthighlighter"> MongoDB</span> integration
              for efficient data storage. Experienced in{" "}
              <span className="aboutparthighlighter">RESTful API</span>{" "}
              development for seamless frontend-backend communication.
            </p>
          </div>
          <div className="smallwindow ">
            <span className="ellipse ellipsered"></span>
            <span className="ellipse ellipseyellow"></span>
            <span className="ellipse ellipsegreen"></span>
            <p className="smallwindowdata">
              {`{`}
              <br />
              <span className="constformatter">const</span> Name: Deepak,
              <br />
              <span className="constformatter">const</span> City: Delhi,
              <br />
              <span className="constformatter">const </span>
              Education: BCA
              <br />
              {`}`}
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default forwardRef(Aboutpart);
