import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const SuccessMessage = ({ status }: { status: string }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className='flex flex-col items-center gap-3 py-6 justify-center'
    >
      <div className='border-2 border-lightSky w-20 h-20 rounded-full flex items-center text-lightSky bg-lightSky/5'>
        <Check className='w-10 h-10' />
      </div>
      <h2 className='text-4xl leading-none font-extrabold text-transparent'>
        Thank You!
      </h2>
      <p>{status}</p>
    </motion.div>
  );
};

export default SuccessMessage;
