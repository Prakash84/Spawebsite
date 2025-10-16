"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* ✅ Google Analytics Tag */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J61QTX20MN"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J61QTX20MN');
        `}
      </Script>

      {/* ✅ Google Site Verification */}
      <meta
        name="google-site-verification"
        content="urWTsZ4VUiaWDY0gtPaGZ2YFOFrW4fQxFwqYn8lovLs"
      />
    </>
  );
}
