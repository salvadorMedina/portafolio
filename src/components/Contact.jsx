import React, { useEffect, useState } from "react";
import right_arrow_white from "../assets/right-arrow-white.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [submissions, setSubmissions] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const storedData = JSON.parse(localStorage.getItem('formSubmissions')) || {};
    if (storedData.date === today) {
      setSubmissions(storedData.count);
    } else {
      localStorage.setItem('formSubmissions', JSON.stringify({ date: today, count: 0 }));
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    const storedData = JSON.parse(localStorage.getItem('formSubmissions')) || {};

    if (storedData.date === today && storedData.count >= 3) {
      setResult("Has alcanzado el límite de envíos para hoy.");
      return;
    }

    const hCaptcha = event.target.querySelector(
      "textarea[name=h-captcha-response]"
    ).value;
    if (!hCaptcha) {
      event.preventDefault();
      setResult("Por favor, complete el campo Captcha.");
      return;
    }
    setResult("Enviando su mensaje...");
    const formData = new FormData(event.target);

    // ----- Enter your Web3 Forms Access key below---------

    formData.append("access_key", "4a0dcc1e-6986-4ef8-b6b4-8a8b4a42e006");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("¡Mensaje enviado con éxito! Gracias por contactarme.");
      event.target.reset();
      const newCount = (storedData.count || 0) + 1;
      localStorage.setItem('formSubmissions', JSON.stringify({ date: today, count: newCount }));
      setSubmissions(newCount);
    } else {
      console.log("Error", res);
      setResult("Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.");
    }
  };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      let lang = null;
      let onload = null;
      let render = null;

      captchadiv.forEach(function (item) {
        const sitekey = item.dataset.sitekey;
        lang = item.dataset.lang;
        onload = item.dataset.onload;
        render = item.dataset.render;

        if (!sitekey) {
          item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }
      });

      let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
      if (lang) {
        scriptSrc += `&hl=${lang}`;
      }
      if (onload) {
        scriptSrc += `&onload=${onload}`;
      }
      if (render) {
        scriptSrc += `&render=${render}`;
      }

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrc;
      document.body.appendChild(script);
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Formulario de Contacto
      </h4>
      <h2 className="text-center text-5xl font-Ovo">
        Ponte en contacto conmigo
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Si quieres contactarme, tienes alguna duda, comentario o sugerencia
        <br></br>usa el siguiente formulario a continuación.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input
          type="hidden"
          name="subject"
          value="Juan Medina - Nuevo envio de Formulario"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Ingresa tu Nombre"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
            name="name"
          />

          <input
            type="email"
            placeholder="Ingresa tu Correo Electronico"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Ingresa tu mensaje"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          required
          name="message"
        ></textarea>
        <div className="flex justify-center items-center">
          <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>
        </div>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-[#22cb95] duration-500 dark:bg-transparent dark:border-[0.5px] "
        >
          Enviar
          <img src={right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
