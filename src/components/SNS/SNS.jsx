import React, { useState } from "react";
import { RiKakaoTalkLine } from "react-icons/ri";
import { whatsAppData } from "../../constants/";

import "./SNS.css";

const SNS = () => {
  const whatsAppLink = whatsAppData.whatsApp.url + whatsAppData.whatsApp.number;
  const [hoverStatus, setHoverStatus] = useState("false");

  function hoverHandling() {
    setHoverStatus((prev) => {
      return !prev;
    });
  }
  return (
    <div id="social-share">
      <a href="#home" title="Social Share" id="share">
        <i className="fas fa-chevron-circle-left my-social"></i>
      </a>

      <a
        href="https://www.instagram.com/beralashnz/"
        target="_blank"
        title="Instagram"
        id="instagram"
        rel="noreferrer"
      >
        <i className="fab fa-instagram my-social"></i>
      </a>

      <a
        href="https://www.fresha.com/a/bera-lash-auckland-5-120-sunnynook-road-ld94r2lw/booking"
        target="_blank"
        title="Fresha"
        id="fresha"
        rel="noreferrer"
      >
        <i className="far fa-calendar-check my-social"></i>
      </a>

      <a
        href="https://open.kakao.com/o/sSQpIWMd"
        target="_blank"
        title="Kakaotalk"
        id="kakaotalk"
        rel="noreferrer"
      >
        <RiKakaoTalkLine
          className="kakao-talk my-social"
          onMouseOver={hoverHandling}
          onMouseOut={hoverHandling}
          style={{ color: hoverStatus ? "black" : "white" }}
          size="42px"
        />
      </a>

      <a
        href={whatsAppLink}
        className="w-button"
        data-number={whatsAppData.whatsApp.number}
        data-message=""
      >
        <i className="fab fa-whatsapp my-social"></i>
      </a>
    </div>
  );
};

export default SNS;
