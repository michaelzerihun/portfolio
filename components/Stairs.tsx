import { animate, motion } from 'motion/react';
import { init } from 'next/dist/compiled/webpack/webpack';

const Stairs = () => {
  const stairAnimation = {
    initial: {
      top: '0%',
    },
    animate: {
      top: '100%',
    },
    exit: {
      top: ['100%', '0%'],
    },
  };
  const reverseindex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className='h-full w-full relative bg-white'
          variants={stairAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseindex(index) * 0.1,
          }}
          custom={reverseindex(index)}
        />
      ))}
    </>
  );
};

export default Stairs;
