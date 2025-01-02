'use client';

import { useTypewriter } from '@/hooks/user-type-writer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HomeDescripton = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description =
    'EEnthusiastic and detail-oriented software developer with a focus on web development. Experienced in crafting responsive UI and implementing web solutions using technologies such as React, Next.js, and Firebase.';
  const { displayedText, isComplete } = useTypewriter(description, 30);

  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <motion.p
      className='w-auto font-normal leading-7 mb-6 min-h-30'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: 'rgb(156 163 175)' }}
            animate={{
              color: isComplete ? 'rgb(255 255 255)' : 'rgb(156 163 175)',
            }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span className='text-white/60'>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescripton;
