import React from "react";
import { useEffect, useState } from "react";

import valo6 from "./assests/valo6.svg";

import axios from "axios";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import group from "./assests/group.svg";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents")
      .then((response) => {
        setAgents(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching agents:", error);
      });
  }, []);

  return (
    <div className=" h-screen w-full bg-[#E4C8EF]">
      <div className="flex  bg-[#E4C8EF] justify-around py-3">
        <div className="flex items-center pt-1">
          <Link to="/">
            <img src={valo6} alt="" />
          </Link>
        </div>
        <div className=" space-x-12  items-bottom hidden md:flex items-center">
          <div className="uppercase text-[#A06CD5] font-semibold text-md cursor-pointer">
            home
          </div>
          <Link
            to="agents"
            className="uppercase text-[#A06CD5] font-semibold text-md cursor-pointer"
          >
            aGents
          </Link>
          <div className="uppercase text-[#A06CD5] font-semibold text-md cursor-pointer">
            Features
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 gap-4 bg-[#E4C8EF]">
        <div className="sm:col-span-1 bg-[#E4C8EF] ">
          <div className="py-2 sm:mx-24 mx-8">
            <div className=" sm:text-4xl text-3xl flex justify-center items-center sm:pt-16 pt-8 pb-2 font-bold text-[#A06CD5] ">
              Get updates of your favorite Valorant agents!
            </div>
            <div className="text-white sm:text-lg text-md py-1">
              An extensive descriptive data containing web app containing data
              of most in-game valo agents, items, assets and more!
            </div>
            <Link
              to="/agents"
              className="px-5 my-8 py-2.5 animate-bounce relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-0 h-full  transition-all duration-200 ease-out transform translate-x-0 bg-purple-600 group-hover:w-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                Browse Agents!{" "}
              </span>
            </Link>{" "}
          </div>
        </div>

        <div className="sm:col-span-1 bg-[#E4C8EF] w-full relative">
          <img src={group} alt="" className="absolute" />
          <AliceCarousel
            className=" flex justify-center items-center"
            autoPlay
            disableButtonsControls
            disableDotsControls
            infinite
            autoPlayInterval={1000}
            items={agents
              .filter((agent) => agent.isPlayableCharacter)
              .map((agent) => (
                <div key={agent.uuid}>
                  <img
                    src={agent.fullPortrait}
                    alt={agent.displayName}
                    height="680"
                  />
                </div>
              ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
