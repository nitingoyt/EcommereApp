import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="felx flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            minus, eaque quos doloribus minima architecto odit aut. Veniam rem
            delectus ipsum ratione accusamus ea sequi! Delectus quaerat dolor
            alias ab.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="felx flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91-98113-*****</li>
                <li>contact@freeforyou.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ freeforyou.com - No Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
