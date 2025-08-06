import footerContact from "../../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

import { TbMailPlus } from "react-icons/tb";

import { NavLink } from "react-router-dom";



export const Footers = () => {
  // Map icon names (as strings) to actual JSX icons
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;

          return (
            <div className="footer-contact" key={index}>
              <div className="icon"> {footerIcons[icon]} </div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copyright-area">
        <div className="container">
            <div className="grid grid-two-cols">
                <div className="copyright-text">
                    <p>
                        copyright &copy; 2024; All right Reserved
                        <NavLink to ="">
                            This ia A link
                        </NavLink>
                    </p>

                </div>
                <div className="footer-menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="" target="-blank">
                            Social
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" target="-blank">
                            Sorce code
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Contect#" target="-blank">
                            Contect
                            </NavLink>
                        </li>
                        

                    </ul>

                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
