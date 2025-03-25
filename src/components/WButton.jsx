import React from "react";

const WButton = () => {
  const phoneNumber = "+51996112937";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center w-14 h-14"
    >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
      alt="WhatsApp"
      className="w-8 h-8"
    />
  </a>
  );
};

export default WButton;
