import React from "react";
import { SectionWrapper } from "../hoc";

const RedirectToURL = () => {
  const handleRedirect = () => {
    window.location.href = "https://chrome.google.com/webstore/detail/lynk/pjlnajjbbpjgimaidaoinoeebehkcboj?hl=en";
  };

  return (
    <div onClick={handleRedirect} style={{ cursor: 'pointer' }}>
      Click to redirect
    </div>
  );
};

export default SectionWrapper(RedirectToURL, "extension");
