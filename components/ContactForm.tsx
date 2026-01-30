import React, { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

const ContactForm: React.FC = () => {
  useEffect(() => {
    const portalId = "442301086";
    const formId = "291f8dc9-af73-4446-b370-0c20568b7af2";
    const region = "ap1";

    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: '#hubspot-form-container'
        });
      }
    };

    // Check if script already exists
    const scriptSrc = "https://js.hsforms.net/forms/v2.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else if (window.hbspt) {
      loadForm();
    } else {
      script.addEventListener('load', loadForm);
    }

    return () => {
      // Clean up the form container content on unmount to prevent duplicates
      const container = document.getElementById('hubspot-form-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div id="hubspot-form-container" className="min-h-[500px]">
        {/* HubSpot Form will render here */}
      </div>
    </div>
  );
};

export default ContactForm;
