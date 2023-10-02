import React from "react";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="flex flex-col">


        <footer className="text-center">
            <p className="mb-2 text-cyan-300">
                <small>COPYRIGHT © 2023 ALL RIGHTS RESERVED |
                    Job Jolt by <a href="https://www.sujalthomas.com">Sujal Thomas</a>
                </small>
            </p>
            <p className="mb-0 text-cyan-200">
                <small>Privacy policy available at <a href="https://lynk.up.railway.app/privacy">Privacy</a></small>
            </p>
        </footer>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
