import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Users() {
  return (
    <div
      className="w-48 h-fit ml-8 mt-8  border-gray-900 px-8 py-6"
      style={{ border: "1px solid #f0f0f0 " }}
    >
      <div className="w-full flex justify-center items-center">
        <div>
          <img
            src="https://api.uifaces.co/our-content/donated/IPh6PTBx.jpg"
            alt=""
            className="rounded-full p-4"
          />
          <div className="text-center ">John Doe</div>
        </div>
      </div>
      <div className="w-full text-gray-800 mt-2">
        <div className="flex items-center gap-4">
          <div className="p-1 shadow-inner  rounded-full">
            <FaGithub className=" text-2xl" />
          </div>

          <div className="ml-3">
            <a href="!#">Github</a>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <div className="p-1 shadow-inner  rounded-full">
            <FaLinkedin className="text-2xl" />
          </div>

          <div className="ml-3">
            <a href="!#">Linkedin</a>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <div className="p-1 shadow-inner  rounded-full">
            <FaGlobe className="text-2xl" />
          </div>
          <div className="ml-3">
            <a href="!#">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
}
