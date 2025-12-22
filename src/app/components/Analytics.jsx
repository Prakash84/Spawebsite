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

      {/* LocalBusiness + DaySpa Schema */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness","DaySpa"],
            "name": "Spa Delhi",
            "url": "https://www.spadelhi.com/",
            "logo": "https://www.spadelhi.com/logo.png",
            "image": "https://www.spadelhi.com/banner.jpg",
            "telephone": "+91-9220961427",
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Delhi",
              "addressRegion": "DL",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Su 10:00-22:00"
          }
          `}
        </Script>

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Spa Delhi",
            "url": "https://www.spadelhi.com/",
            "logo": "https://www.spadelhi.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9220961427",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          }
          `}
        </Script>
    </>
  );
}
