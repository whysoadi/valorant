import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaPlay } from "react-icons/fa";
import valorant from "./assests/valorant.svg"
import { Link } from 'react-router-dom';

const AgentDetails = () => {
  const [agent, setAgent] = useState(null);
  const { mil } = useParams();

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const response = await axios.get(`https://valorant-api.com/v1/agents/${mil}`);
        setAgent(response.data.data);
      } catch (error) {
        console.error('Error fetching agent details:', error);
      }
    };

    fetchAgentDetails();
  }, [mil]);

  if (!agent) {
    return (<div>
        <div>
           
        </div>
    <div className='flex justify-center items-center bg-gradient-to-br from-[#E7D4EE] to-[#291167] h-screen w-full bg-opacity-55'>
    <img className='h-1/2 w1/2 animate-ping ' src={valorant} alt="" />
        {/* <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-bounce dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg> */}
    </div>
    </div>);
  }

  
  return (
    <div className='h-full py-4 w-full bg-gradient-to-br from-[#E7D4EE] to-[#291167]'>
    <div className='grid lg:grid-cols-7 gap-2 '>
       <div className='lg:col-span-4 '>
    <div className='m-4 sm:ml-14 ml-6 sm:mr-40'>
        <div className='h-8 w-8 flex space-x-3 md:ml-2'>
            <img src={agent.role.displayIcon} alt="" height="90" />
            <div className='text-[#5E3FB0] italic font-medium flex uppercase items-end text-xl '>{agent.role.displayName}</div>
        </div>
        <div className='font-bold md:text-8xl text-5xl uppercase text-white'>
{agent.displayName}
</div>
<div className='italic sm:text-sm text-xs sm:py-1 py-2 font-medium '>
   '' { agent.description + "'' "}
</div>
    </div>
    <div className='grid lg:grid-cols-4 sm:mx-12 mx-6 lg:mx-0 gap-2'>
        <div className='lg:col-span-3'>
        <div className='mx-4 mt-4 text-white uppercase text-2xl font-bold'>
            Abilities
        </div>
        <div className='bg-[#5E3FB0] my-4 py-4 w-full sm:px-8 px-2 lg:rounded-l-none rounded-2xl  flex items-center hover:scale-105 duration-200 ease-out '>
      <img className='h-16 w-16 mx-4 ' src={agent.abilities[0].displayIcon} alt="" /> 
      <div className=''>
        <div className='font-bold text-white uppercase'>
        {agent.abilities[0].displayName  }
        </div>
        <div className='text-white sm:text-sm text-xs'>
        {agent.abilities[0].description.slice(0,100)}...
        </div>
        </div>  
        </div>

        <div className='bg-[#5E3FB0] my-4 py-4 w-full sm:px-8 px-2 lg:rounded-l-none rounded-2xl  flex items-center hover:scale-105 duration-200 ease-out' >
      <img className='h-16 w-16 mx-4 ' src={agent.abilities[1].displayIcon} alt="" /> 
      <div className=''>
        <div className='font-bold text-white uppercase'>
        {agent.abilities[1].displayName  }
        </div>
        <div className='text-white sm:text-sm text-xs'>
        {agent.abilities[1].description.slice(0,100)}...
        </div>
        </div>  
        </div>

        <div className='bg-[#5E3FB0] my-4 py-4 w-full  sm:px-8 px-2 lg:rounded-l-none rounded-2xl  flex items-center hover:scale-105 duration-200 ease-out'>
      <img className='h-16 w-16 mx-4 ' src={agent.abilities[2].displayIcon} alt="" /> 
      <div className=''>
        <div className='font-bold text-white uppercase'>
        {agent.abilities[2].displayName  }
        </div>
        <div className='text-white sm:text-sm text-xs'>
        {agent.abilities[2].description.slice(0,100)}...
        </div>
        </div> 
        </div>
     
        <div className='bg-[#5E3FB0] my-4 py-4 w-full sm:px-8 px-2 lg:rounded-l-none rounded-2xl  flex items-center hover:scale-105 duration-200 ease-out' >
      <img className='h-16 w-16 mx-4 ' src={agent.abilities[3].displayIcon} alt="" /> 
      <div className=''>
        <div className='font-bold text-white uppercase'>
        {agent.abilities[3].displayName +" (ULT)" }
        </div>
        <div className='text-white sm:text-sm text-xs'>
        {agent.abilities[3].description.slice(0,100)}...
        </div>
        </div>  
        </div>

        </div>
        {/* <div className="px-5 ml-28 mt-4 py-2.5 cursor-pointer relative rounded group overflow-hidden font-medium bg-purple-50 text-[#A06CD5] inline-block">
           
<span className="absolute top-0 left-0 flex w-0 h-full  transition-all duration-200 ease-out transform translate-x-0 bg-[#A06CD5] group-hover:w-full opacity-90"></span>
<span className='relative group-hover:text-white'>
<FaPlay size={32}/>
            </span>
<span className="relative group-hover:text-white">PLAY </span>
</div> */}
<Link to='https://playvalorant.com/en-gb/' target='_blank' className='col-span-1 flex sm:items-end justify-center'>
<div className='h-16 w-40 bg-white flex justify-center text-[#5E3FB0] cursor-pointer items-center hover:bg-[#5E3FB0] hover:text-white space-x-3 rounded-lg sm:my-6 '>
<FaPlay size={32} className=' hover:text-white'/>
<div className='uppercase font-bold text-xl '>Play</div>
</div>
</Link>
      {/* <div   style={{
              background: `linear-gradient(to right, ${agent.roleGradient.primary}, ${agent.roleGradient.secondary})`,
            }}>
        kb,ad
        </div>  */}
    </div>
       </div>
       <div className='lg:col-span-3 flex relative h-full justify-center items-center z-0'>
<img src={agent.background} alt="" className='h-full absolute z-10 opacity-50' />
<img src={agent.fullPortrait} alt="" className='w-full h-full sm:py-8 z-20 relative' />
       </div>
     
    </div>
    </div>
  );
};

export default AgentDetails;