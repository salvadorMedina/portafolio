import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import mail_icon from "../assets/mail_icon.png";
import mail_icon_dark from "../assets/mail_icon_dark.png";
import phone_icon from "../assets/phone-icon.png";
import phone_icon_dark from "../assets/phone-icon-dark.png";

const Footer = () => {
  const [copiedText, setCopiedText] = useState("");
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });

  const handleCopy = (text, event) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      const rect = event.target.getBoundingClientRect();
      setPopup({ visible: true, x: rect.left + rect.width /2 - 150 /2, y: rect.top - 40 });
    });
  };

  useEffect(() => {
    if (copiedText) {
      const timer = setTimeout(() => {
        setCopiedText("");
        setPopup({ visible: false, x: 0, y: 0 });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedText]);

  return (
    <div className="mt-10">
      <div className="text-center">
        <img src={logo} alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <img
          src={logo_dark}
          alt=""
          className="w-36 mx-auto mb-2 hidden dark:block"
        />

        <div
          className="w-max flex items-center gap-2 mx-auto mt-5 cursor-pointer"
          onClick={(e) => handleCopy("juanmedina@gmail.com", e)}
        >
          <img src={mail_icon} alt="" className="w-6 dark:hidden" />
          <img src={mail_icon_dark} alt="" className="w-6 hidden dark:block" />
          juanmedina@gmail.com
        </div>
        <div
          className="w-max flex items-center gap-2 mx-auto cursor-pointer"
          onClick={(e) => handleCopy("+51 987 869 862", e)}
        >
          <img src={phone_icon} alt="" className="w-6 dark:hidden" />
          <img src={phone_icon_dark} alt="" className="w-6 hidden dark:block" />
          +51 987 869 862
        </div>
      </div>
      {popup.visible && (
        <div
          className="fixed bg-gray-500 text-white px-2 py-1 rounded"
          style={{ left: popup.x, top: popup.y }}
        >
          copiado en portapapeles
        </div>
      )}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Samcas. Derechos Reservados.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://wa.me/+51987869862?text=Hola">
              Whatsapp
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/JuanMedina?_l=es_ES">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/juanmanuel.medinacastillo">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
