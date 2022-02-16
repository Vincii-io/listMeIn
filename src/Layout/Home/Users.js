import React from 'react'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

export default function Users() {
    return (
        <div className="w-48 h-fit ml-8 mt-8 border  border-gray-200 px-8 py-4">
            <div className="w-full flex justify-center items-center">
                <div>
                    <img
                        src="https://api.uifaces.co/our-content/donated/IPh6PTBx.jpg"
                        alt=""
                        className="rounded-full p-2"
                    />
                    <div className="text-center font-semibold">John Doe</div>
                </div>
            </div>
            <div className="w-full text-gray-500 mt-6">
                <div className="flex items-center gap-4">
                    <div className="p-1 shadow-inner  rounded-full">
                        <FaGithub className=" text-2xl" />
                    </div>

                    <div className="ml-3 text-gray-800 text-sm">
                        <a href="!#">Github</a>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-1">
                    <div className="p-1 shadow-inner  rounded-full">
                        <FaLinkedin className="text-2xl" />
                    </div>

                    <div className="ml-3 text-gray-800 text-sm ">
                        <a href="!#">Linkedin</a>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-1">
                    <div className="p-1 shadow-inner  rounded-full">
                        <FaGlobe className="text-2xl" />
                    </div>
                    <div className="ml-3 text-gray-800 text-sm">
                        <a href="!#">Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
