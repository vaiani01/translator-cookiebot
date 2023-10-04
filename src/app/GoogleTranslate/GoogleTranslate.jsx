"use client";
import { hasCookie, setCookie, getCookie } from "cookies-next";
import { useEffect } from "react";

const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "ru,en,fr", // If you remove it, by default all google supported language will be included
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const cookie = getCookie("googtrans");

  useEffect(() => {
    if (!hasCookie("googtrans") && !cookie) {
      setCookie("googtrans", "auto/fr");
    }
  }, [cookie]);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
