import React, { useEffect } from "react";
import "./navigation.css";

function Navigation() {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scroll", window.scrollY);
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className={`nav ${show && "show_bg"}`}>
      <img
        className={`logo ${show && "set_width"}`}
        src={
          show
            ? "https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
            : "https://assets.brand.microsites.netflix.io/assets/1561c76e-b389-11e7-9274-06c476b5c346_cm_800w.png"
        }
        alt="netflix"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar"
      />
    </div>
  );
}

export { Navigation };
