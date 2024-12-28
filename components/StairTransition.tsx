'use client';
import { AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <div className='h-screen w-screen fixed left-0 top-0 pointer-events-none z-40 flex'>
          <Stairs />
        </div>
      </div>
      ;
    </AnimatePresence>
  );
};

export default StairTransition;
