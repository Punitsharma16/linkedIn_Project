import React, { useEffect, useRef, useState } from "react";
// import { ReactComponent as ProfileIcon } from "./profile.svg";
// import { useNavigate } from "react-router-dom";
import style from './profile.module.css'
// import { ProfileImage } from "../Assets/profileImage";
import { ProfileLogo } from "./profileLogo";
import { ProfileInfo } from "./profileInfo";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const profileIconRef = useRef(null);
//   const navigate = useNavigate();

  useEffect(() => {
    const hideModal = (e) => {
      //   console.log("e.target", e.target);
      if (profileIconRef.current.contains(e.target)) {
        // console.log("here");
        return;
      }
      setShowModal(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);
  return (
    <section
      className={style.profile}
      onClick={() => {
        setShowModal(!showModal);
      }}
      ref={profileIconRef}
    >
      <section className={style.profileIcon}>
        {/* <ProfileIcon /> */}
        <ProfileLogo/>
      </section>

      {showModal && (
        <section className={style.authModal}>
          {/* <button className="signin-btn">Sign-in</button> */}
          <ProfileInfo/>
        </section>
      )}
    </section>
  );
};