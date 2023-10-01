import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Footer = () => {
  return (
    <div className="flex flex-col">


        <footer className="text-center">
            <p className="mb-2">
                <small>COPYRIGHT © 2023 ALL RIGHTS RESERVED |
                    Job Jolt by <a href="https://www.sujalthomas.com">Sujal Thomas</a>
                </small>
            </p>
            <p className="mb-0">
                <small>Privacy policy available at <a href="https://lynk.up.railway.app/privacy">Privacy</a></small>
            </p>
        </footer>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
