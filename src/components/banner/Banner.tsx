"use client";

import React from 'react';
import { Spotlight } from '../ui/Spotlight';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';

const Banner = () => {
    return (
        <div className='h-screen'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[50vh]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh]' fill='blue' />
            </div>

            <div className="absolute h-screen w-full flex items-center justify-center top-0 left-0 z-0">
                 <div
                    className={cn(
                    "absolute inset-0",
                    "[background-size:100px_100px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)]",
                    )}
                />
     
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] 
                "></div>
                <div className='flex justify-center relative my-20 z-10'>
                    <div className='flex flex-col items-center justify-center text-center'>    
                            <h2 className='uppercase px-1 text-2xl md:text-4xl lg:text-5xl text-center text-blue-100 font-bold mb-4 leading-snug'>
                            Hi, I am Badhon Rani <br /> a passionate web developer</h2>

                                <TextGenerateEffect className='text-center text-2xl md:text-4xl text-blue-100 font-bold mb-4'
                                filter={false} duration={0.5}
                                words='Turning Ideas into Interactive Interfaces'/>

                               
                    </div>
              
                </div>

                
                </div>
            
        </div>
    );
};

export default Banner;