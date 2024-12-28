import PageLayout from '@/components/PageLayout';
import Title from '@/components/Title';
import { Separator } from '@/components/ui/separator';
import { servicesData } from '@/constants';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
  return (
    <section className='min-h-[80vh] flex flex-col w-full py-5 md:py-10'>
      <PageLayout>
        <Title>Services I provide</Title>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12'>
          {servicesData.map((item) => (
            <div
              key={item._id}
              className='flex flex-col p-6 bg-lightSky/5 rounded-lg border-lightSky/10 hover:border-lightSky/30 shadow-md group hover:shadow-lg gap-2.5 hoverEffect'
            >
              <div className='w-full flex justify-between items-center'>
                <p className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect'>
                  {item._id}
                </p>
                <Link href={item.href} target='_blank'>
                  <ArrowUp className='rotate-45 text-white group-hover:text-lightSky hoverEffect' />
                </Link>
              </div>
              <h2 className='font-semibold text-white'>{item.title}</h2>
              <p className='text-sm md:text-base text-white/70'>
                {item.description}
              </p>
              <Separator className='bg-white/20' />
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default ServicesPage;
