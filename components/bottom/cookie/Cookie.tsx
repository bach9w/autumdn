"use client";
import { useEffect, useState } from "react";
import CookieConsent from "./CookieConsent";
import { Button } from "@components/ui/button";

function Cookie() {
  const [cookie, setCookie] = useState<boolean>();
  useEffect(() => {
    if (document.cookie.includes("cookieConsent=true")) {
      setCookie(false);
    } else {
      setCookie(true);
    }
  }, []);
  return (
    <div>
      <CookieConsent
        demo={cookie}
        onAcceptCallback={() => {
          setCookie(false);
        }}
        onDeclineCallback={() => {
          setCookie(false);
        }}
      />
    </div>
  );
}

export default Cookie;
