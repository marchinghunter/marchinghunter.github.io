import { forwardRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import "../Style/Contact.css";

const Contactpart = (props, ref) => {
  const [contactref, inView, entry] = useInView();
  const [animateclassdown, setAnimateClassdown] = useState('aboutheadingbefore');
  useEffect(() => {
    if (inView === true) {
      setAnimateClassdown("animate__animated animate__fadeInUp");
    }
  }, [inView]);
  return (
    <>
      <div className="contactcontainer" ref={contactref}>
        <h3 className={`contactheading ${animateclassdown}`} ref={ref}>
          Contact
        </h3>
        <div className="contactssubcontainer " >
          <div className={`contacts ${animateclassdown}`}>
            <span className="icons">
              <FaPhoneAlt />
            </span>
            <h5 className="contactdetail">+917531018332</h5>
          </div>
          <div className={`contacts email ${animateclassdown}`}>
            <span className="icons">
              <AiTwotoneMail />
            </span>
            <h5 className="contactdetail" ref={contactref}>adroitinnovator@gmail.com</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Contactpart);
