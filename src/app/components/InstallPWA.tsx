// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client";
import { useState, useEffect } from "react";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true); // Affiche un bouton ou une invitation personnalisée
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
        } else {
          console.log("App installation dismissed");
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  return (
    isVisible && (
      <button
        onClick={installApp}
        className="absolute top-0 left-0 bg-red-300 border border-black"
        style={{ padding: "10px", fontSize: "16px" }}
      >
        Installer l&apos;application
      </button>
    )
  );
}
