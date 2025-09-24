import React from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-red-50">
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="160"
          viewBox="0 0 800 160"
        >
          <rect width="100%" height="100%" fill="transparent" />
          <text
            x="20"
            y="110"
            font-family="Poppins, Inter, sans-serif"
            font-weight="600"
            font-size="72"
            fill="#222222"
          >
            arkaprava
          </text>
          <rect x="20" y="122" width="178" height="6" rx="3" fill="#FF6F61" />
        </svg>
      </div>

      <div className="flex gap-10 w-full  px-90 ">
        <a className="text-3xl flex items-center gap-1 hover:text-blue-700" href="https://www.linkedin.com/in/arkaprava-santra-1731512bb/">
          <i class="ri-linkedin-fill"></i>linkedin
        </a>
        <a className="text-3xl flex items-center gap-1 hover:text-red-700" href="https://dribbble.com/imkuttu123">
          <i class="ri-dribbble-fill"></i>Dribble
        </a>
      </div>
    </div>
  );
};

export default Navbar;
