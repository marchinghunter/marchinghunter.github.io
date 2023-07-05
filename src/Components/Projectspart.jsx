import { forwardRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../Style/Project.css";

const Projectspart = (props, ref) => {
  const [projectref, inView, entry] = useInView();
  const [animateclassdown, setAnimateClassdown] = useState('aboutheadingbefore');
  const [animateclassleft, setAnimateClassleft] = useState('aboutheadingbefore');
  const [animateclassright, setAnimateClassright] = useState('aboutheadingbefore');
  useEffect(() => {
    if (inView === true) {
      setAnimateClassdown("animate__animated animate__fadeInUp");
      setAnimateClassleft("animate__animated animate__fadeInUp");
      setAnimateClassright("animate__animated animate__fadeInUp");
    }
  }, [inView]);
  return (
    <>
      <div className="projectcontainer">
        <h3 className={`projectheading ${animateclassdown}`} ref={ref}>
          PROJECTS
        </h3>
        <div className="myprojects">
          <div className="projectspart" ref={projectref}>
            <div className={`projectthumbnailcontainer ${animateclassleft}`}>
              <img
                src="https://user-images.githubusercontent.com/29193764/223542465-d3c271a2-b6fb-4b9e-adf1-ca3cc598b5c8.gif"
                alt="Foodorderingapp Thumbnail"
                className="projectthumbnail"
              />
            </div>
            <div className={`projectsubcontent ${animateclassright}`}>
              <h4 className="projecttitle">Food Ordering App</h4>
              <p className="projectsummary">
                This full-stack web application enables users to order food
                online from a restaurant. It consists of a front-end client
                built with React.js and a back-end server developed using
                Node.js and Express.js. The server is connected to a MongoDB
                database, allowing the storage of user and order data.
              </p>
              <a
                href="https://github.com/marchinghunter/foodorderingapp"
                className="projectgithublink"
                target="_blank"
              >
                Github Link
              </a>
            </div>
          </div>
          <div className="projectspart">
            <div className={`projectthumbnailcontainer delay ${animateclassleft}`}>
              <img
                src="https://user-images.githubusercontent.com/29193764/222738886-fe6b13be-b4c7-4460-a6f1-1f063f960841.png"
                alt="Foodorderingapp Thumbnail"
                className="projectthumbnail"
              />
            </div>
            <div className={`projectsubcontent delay ${animateclassright}`}>
              <h4 className="projecttitle">Weather App</h4>
              <p className="projectsummary">
                This ReactJS Weather App utilizes openweathermap API to display
                real-time weather data for any city. With a user-friendly
                interface and responsive design, users can easily search and
                stay updated on current weather conditions.
              </p>
              <a
                href="https://marchinghunter.github.io/weatherapp/"
                className="projectgithublink"
                target="_blank"
              >
                Live Project Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Projectspart);
