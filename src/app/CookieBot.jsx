"use client";
import { useEffect } from "react";
// var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

import CookieBotLib from "react-cookiebot";
// const _react = _interopRequireDefault(require("react"));

// const CookieBotLib = dynamic(
//   () => import("../../node_modules/react-cookiebot/lib/CookieBot"),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );

const CookieBot = () => {
  const domainGroupId = "df96d169-da01-4be0-8887-df1cb47c9eae";

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("id", "CookieBot");
    script.setAttribute("src", "https://consent.cookiebot.com/uc.js");
    script.setAttribute("data-cbid", domainGroupId);
    script.setAttribute("data-blockingmode", "auto");
    script.setAttribute("type", "text/javascript");

    const head = document.querySelector("html > head");
    head.insertBefore(script, head.firstChild);
    return document.createElement("script", {
      id: "CookieDeclaration",
      src: "https://consent.cookiebot.com/".concat(domainGroupId, "/cd.js"),
      type: "text/javascript",
      "data-culture": "FR",
      async: true,
    });
  }, []);

  return;
  <CookieBotLib domainGroupId={domainGroupId} />;
};
export default CookieBot;
