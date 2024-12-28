'use client';
import PageLayout from '@/components/PageLayout';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import React from 'react';
import Image from 'next/image';
import proj1 from '@/images/proj1.png';
import proj2 from '@/images/proj2.png';
import proj3 from '@/images/proj3.png';
import proj4 from '@/images/proj4.png';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: '01',
    title: 'Weather Forecasting Dashboard',
    category: 'Frontend',
    description:
      'A weather forecasting dashboard built with React and Tailwind CSS.',
    stack: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    image: proj1,
    liveUrl: 'https://weather-forecasting-dashboard.vercel.app/',
    githubUrl:
      'https://github.com/kenneth-nguyen/weather-forecasting-dashboard',
  },
  {
    id: '02',
    title: 'Weather Forecasting Dashboard',
    category: 'Frontend',
    description:
      'A weather forecasting dashboard built with React and Tailwind CSS.',
    stack: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    image: proj2,
    liveUrl: 'https://weather-forecasting-dashboard.vercel.app/',
    githubUrl:
      'https://github.com/kenneth-nguyen/weather-forecasting-dashboard',
  },
  {
    id: '03',
    title: 'Weather Forecasting Dashboard',
    category: 'Frontend',
    description:
      'A weather forecasting dashboard built with React and Tailwind CSS.',
    stack: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    image: proj3,
    liveUrl: 'https://weather-forecasting-dashboard.vercel.app/',
    githubUrl:
      'https://github.com/kenneth-nguyen/weather-forecasting-dashboard',
  },
  {
    id: '04',
    title: 'Weather Forecasting Dashboard',
    category: 'Frontend',
    description:
      'A weather forecasting dashboard built with React and Tailwind CSS.',
    stack: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript'],
    image: proj4,
    liveUrl: 'https://weather-forecasting-dashboard.vercel.app/',
    githubUrl:
      'https://github.com/kenneth-nguyen/weather-forecasting-dashboard',
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className='py-6 md:py-12'>
      <PageLayout>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className='w-full'
          onSelect={() => {
            const index = 0;
            if (typeof index === 'number') {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className='bg-bodyColor border-lightSky/20'>
                  <CardContent className='p-6'>
                    <div className='flex flex-col md:flex-row md:items-center md:space-x-8 group'>
                      {/* description */}
                      <div className='w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0'>
                        <div className='space-y-3 md:space-y-6 mt-4 md:mt-0'>
                          <h2 className='text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline '>
                            {project.id}
                          </h2>
                          <h3 className='text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect'>
                            {project.category}
                          </h3>
                          <p className='text-white/60 text-sm md:text-base leading-6 md:leading-normal'>
                            {project.description}
                          </p>
                          <ul className='flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center'>
                            {project.stack.map((item, index) => (
                              <li
                                key={index}
                                className='text-xs md:text-base text-lightSky'
                              >
                                {item}
                                {index !== project.stack.length - 1 && ', '}
                              </li>
                            ))}
                          </ul>
                          <Separator className='bg-gray-700' />
                          <div className='flex items-center space-x-4'>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant={'outline'}
                                    size={'icon'}
                                    className='bg-lightSky/5 hover:bg-lightSky/20 text-white/80 border border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect'
                                  >
                                    <Link
                                      href={project.liveUrl}
                                      target='_blank'
                                    >
                                      <ArrowUpRight className='w-4 h-4 md:w-6 md:h-6' />
                                      <span className='sr-only'>
                                        View Live Project
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className='bg-white text-black font-semibold'>
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant={'outline'}
                                    size={'icon'}
                                    className='bg-lightSky/5 hover:bg-lightSky/20 text-white/80 border border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect'
                                  >
                                    <Link
                                      href={project.githubUrl}
                                      target='_blank'
                                    >
                                      <Github className='w-4 h-4 md:w-6 md:h-6' />
                                      <span className='sr-only'>
                                        View Github Repository
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className='bg-white text-black font-semibold'>
                                  <p>View Github Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <div className='w-full md:w-1/2 order-1 md:order-2'>
                        <div className='relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden'>
                          <Image src={project?.image} alt={project.title} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='absolute -bottom-8 right-10'>
            <CarouselPrevious className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect' />
            <CarouselNext className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect' />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default Work;
