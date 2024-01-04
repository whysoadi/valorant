import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initiator from "../components/assests/initiator.png";
import controller from "../components/assests/controller.png";
import duelist from "../components/assests/duelist.png";
import sentinal from "../components/assests/sentinal.png";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from "react-router-dom";
import valo7 from "./assests/valo7.svg"

const Agents = () => {
  const [card, setCard] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((data) => {
        // Filter out one of the "Sova" agents based on display name
        const agentInfo = data.data
          .filter((agent) => agent.isPlayableCharacter)
          .map((agent) => ({
            name: agent.displayName,
            iconUrl: agent.displayIcon,
            Id: agent.uuid,
            backgroundUrl: agent.role.displayIcon,
            displayUrl: agent.abilities[1].displayIcon

          }));
        setCard(agentInfo);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAgentClick = (mil) => {
    console.log(mil)
   navigate(`/agents/${mil}`);
   
  };


  return (
    
    <div className=" h-full w-full bg-[#3c2970] py-1" >
       <div className='flex  bg-[#3c2970] justify-around py-3'>
      <div className='flex items-center'>
        <Link to="/">
      <img  src={valo7} alt="" />
      </Link>
      </div>
      <div className=' space-x-12  items-bottom hidden md:flex items-center'>
       <Link to='/' className='uppercase text-white font-semibold text-md cursor-pointer'>
        home
       </Link>
       <div className='uppercase text-white font-semibold text-md cursor-pointer'>
       aGents
       </div>
       <div className='uppercase text-white font-semibold text-md cursor-pointer'>
       Features
       </div>
      </div>
    </div>
      <div className=" my-4 text-center justify-center  bg-[#6445ba]  text-white py-2">
        <div className="sm:text-3xl text-xl font-bold pt-2 uppercase">Select Your Agent</div>
        <div className="sm:text-sm text-xs pb-2 mx-4"> Pick your favourite agent to view its info and combat abilities along with the ULTIMATE</div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 py-6 mx-8">
        <div className="flex items-center justify-center space-x-3">
          <img src={initiator} alt="sdf" width={50} h={50} />
          <div>
          <div className="capitalize font-semibold text-xl text-white">
            initiator
          </div>
          <div className="text-xs text-white">Initiators challenge angles by setting up their team to enter contested ground and push defenders away</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <img src={duelist} alt="sdf" width={50} h={50} />
          <div>
          <div className="capitalize font-semibold text-xl text-white">
          duelist
          </div>
          <div className="text-xs text-white">Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <img src={controller} alt="sdf" width={50} h={50} />
          <div>
          <div className="capitalize font-semibold text-xl text-white">
          controller
          </div>
          <div className="text-xs text-white">Controllers are experts in slicing up dangerous territory to set their team up for success</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <img src={sentinal} alt="sdf" width={50} h={50} />
          <div>
          <div className="capitalize font-semibold text-xl text-white">
           Sentinal
          </div>
          <div className="text-xs text-white">Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds</div>
          </div>
        </div>
      </div>

        <div className=" lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mx-4 grid gap-4  justify-center py-4">
        {card.map((agent) => (
          <div key={agent.uuid} className='z-0 lg:mx-12 justify-center flex-col items-center mx-2 relative h-32 w-32 border-4 border-white rounded my-6 cursor-pointer hover:scale-125   ease-out duration-200' onClick={() => handleAgentClick(agent.Id)} >
            {/* <div>{agent.Id}</div> */}
               <img src={agent.backgroundUrl} alt={`${agent.name} Background`} className="-z-10 absolute bg-[#A06CD5] rounded"  />
            <img src={agent.iconUrl} alt={`${agent.name} Icon`} className=" relative rounded  z-10"/>
            <div className="flex pt-2 space-x-2 justify-center relative items-center  ">
            <img src={agent.backgroundUrl} alt={''} className=" relative rounded  h-7 w-7"/>
            <p className="text-center font-bold text-white">{agent.name}</p>
            </div>
          </div>
        ))}
          
   
        </div>
  
      
    </div>
  );
};

export default Agents;
