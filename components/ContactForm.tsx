import React, { useEffect } from 'react';

const ContactForm: React.FC = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicate loads
    const existingScript = document.querySelector('script[src="https://js-ap1.hsforms.net/forms/embed/442301086.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://js-ap1.hsforms.net/forms/embed/442301086.js";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        // Optional: remove script on unmount, but usually harmless to keep if cached
        // document.body.removeChild(script);
      }
    }
  }, []);

  return (
    <div className="w-full">
      {/* HubSpot Form Container */}
      <div
        className="hs-form-frame"
        data-region="ap1"
        data-form-id="291f8dc9-af73-4446-b370-0c20568b7af2"
        data-portal-id="442301086"
      ></div>

      {/* 
         Note: HubSpot forms render in an iframe or shadow DOM which isolates them from page CSS.
         To style this form exactly like the previous one, you would typically need to add custom CSS 
         within the HubSpot form editor or use their "Raw HTML" embed type.
      */}
      <style>{`
        .hs-form-frame iframe {
            width: 100% !important;
            min-height: 500px;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
