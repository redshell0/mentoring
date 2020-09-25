import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>2020-09-25 mentoring</h1>
      </div>
      <div className="links">
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link to="/">SQL Injection</Link>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link to="/Xss">XSS</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
