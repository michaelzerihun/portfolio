'use client';
import { statsData } from '@/constants';
import React from 'react';
import Countup from 'react-countup';

const Statistics = () => {
  return (
    <div className='flex flex-col items-center md:flex-row gap-2.5 md:gap-5'>
      {statsData.map((item, index) => (
        <div
          key={index}
          className='flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start'
        >
          <Countup
            end={item.num}
            delay={2}
            duration={3}
            className='text-4xl lg:text-6xl font-extrabold'
          />
          <p className='leading-snug text-sm'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
