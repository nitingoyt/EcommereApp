import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-100 h-screen p-4 border-r border-gray-300">
        <div className="space-y-4">
          <NavLink
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 border border-gray-300 border-r-0"
            to="/add"
          >
            <img className="w-5 h-5" src={assets.add_icon} alt="Add Icon" />
            <b className="hidden md:block text-sm text-gray-700">Add Items</b>
          </NavLink>
          <NavLink
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 border border-gray-300 border-r-0"
            to="/list"
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="Add Icon" />
            <b className="hidden md:block text-sm text-gray-700">List Items</b>
          </NavLink>
          <NavLink
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 border border-gray-300 border-r-0"
            to="/orders"
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="Add Icon" />
            <b className="hidden md:block text-sm text-gray-700">Orders Items</b>
          </NavLink>
        </div>
      </div>
    );
  };
  

export default Sidebar;
