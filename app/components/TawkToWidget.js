// components/TawkToWidget.js
"use client"

import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Check if window is available to avoid issues with SSR
    if (typeof window !== "undefined") {
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/60b44b18de99a4282a1a7219/1f704amqk';  // Your Tawk.to embed URL
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    }
  }, []); // Empty dependency array ensures this runs once when the component is mounted

  return null;
};

export default TawkToWidget;
