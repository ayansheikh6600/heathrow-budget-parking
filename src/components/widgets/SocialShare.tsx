"use client"
import Image from 'next/image';
import { useState } from 'react';  

const SocialShare = () => {  
  const [isHovered, setIsHovered] = useState(false);  

  const handleMouseEnter = () => {  
    setIsHovered(true);  
  };  

  const handleMouseLeave = () => {  
    setIsHovered(false);  
  };  

  return (  
    <div  
      className="flex items-center justify-between py-2 px-4 "  
      onMouseEnter={handleMouseEnter}  
      onMouseLeave={handleMouseLeave}  
    >  
      <div className="flex items-center">  
        <span className="text-gray-600 font-medium mr-2">Like</span>  
        <a href="#">  
          <Image width={100} height={100}
            src="/heart.png"  
            alt="Facebook"  
            className="h-5 w-5 ml-2 text-gray-500"  
          />  
        </a>  
      </div>  
      <div className="flex items-center">  
        <span className="text-gray-600 font-medium mr-2">SHARE THIS POST</span>  
        <a href="#">  
          <svg  
            xmlns="http://www.w3.org/2000/svg"  
            className="h-5 w-5 text-gray-500"  
            viewBox="0 0 20 20"  
            fill="none"  
            stroke="currentColor"  
          >  
            <path  
              strokeLinecap="round"  
              strokeLinejoin="round"  
              strokeWidth={2}  
              d="M11 17l-8-8 8-8m0 16l-8-8 8-8"  
            />  
          </svg>  
        </a>  
        <a href="#">  
          <Image width={100} height={100}
            src="/linkedin.png"  
            alt="LinkedIn"  
            className="h-5 w-10 ml-2 text-gray-500"  
          />  
        </a>  
        <a href="#">  
          <Image width={100} height={100}
            src="/pinterest.png"  
            alt="Pinterest"  
            className="h-5 w-10 ml-2 text-gray-500"  
          />  
        </a>  
        <a href="#">  
          <Image width={100} height={100}
            src="/gmail.png"  
            alt="Mail"  
            className="h-5 w-10 ml-2 text-gray-500"  
          />  
        </a>  
        <a href="#">  
          <Image width={100} height={100}
            src="/google.png"  
            alt="Google"  
            className="h-5 w-10 ml-2 text-gray-500"  
          />  
        </a>  
        <a href="#">  
          <Image width={100} height={100}
            src="/facebook.png"  
            alt="Facebook"  
            className="h-5 w-10 ml-2 text-gray-500"  
          />  
        </a>  
        <a href="#">  
          <Image width={100} height={100}
            src="/twitterx.png"  
            alt="Twitter"  
            className="h-5 w-10 ml-2 text-gray-500"  
          />  
        </a>  
          
      </div>  
    </div>  
  );  
};  

export default SocialShare;