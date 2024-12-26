import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            porro nostrum quae vero omnis in sint tempore{" "}
          </p>
          <p>
            Cupiditate, sequi provident ex quidem accusantium quibusdam nulla
            modi deserunt quaerat nostrum, suscipit magni quasi possimus cumque
            ullam dolores ipsum officiis maiores!
          </p>
          <b className="text-gray-800">Hmara Lakshay</b>
          <p>
            Dolorem, distinctio facilis beatae placeat repudiandae eaque
            sapiente rem! Cupiditate distinctio aspernatur ad doloribus dolorem
            atque hic eaque possimus, deserunt laudantium ex.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"NEVER US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Never Assured:</b>
          <p className="text-gray-600">
            Never, Inc. was founded in 2024 and immediately set the bar so low,
            it became a tripping hazard. Acquired by Nitin in the same year,
            we've mastered the art of delivering "meh" so consistently, it feels
            intentional.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Never, Inc. redefines convenience by ensuring everything you need is
            just a little out of reach. Because who needs ease when you can have
            adventure?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our customer service is so exceptional, you'll wonder if you've
            called the right place. We strive to answer all queries—eventually,
            probably, maybe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
