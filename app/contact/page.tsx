import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container';
import PageLayout from '@/components/PageLayout';
import { info } from 'console';
import { Mail, Phone } from 'lucide-react';
import React from 'react';

const infoData = [
  {
    title: 'Phone',
    description: '0901234567',
    icon: <Phone />,
  },
  {
    title: 'Email',
    description: 'kennethnguyen999@gmail.com',
    icon: <Mail />,
  },
  {
    title: 'Address',
    description: '123 Main St, Hanoi, Vietnam',
    icon: <Phone />,
  },
];

const Contact = () => {
  return (
    <PageLayout>
      <Container className='py-6 md:py-12 flex flex-col md:flex-row gap-6 md:gap-14'>
        <div className='w-full md:2/3'>
          <ContactForm />
        </div>
        <div className='w-full md:1/3 flex flex-col justify-center gap-4 md:gap-8'>
          {infoData.map((info) => (
            <div key={info.title} className='flex items-center space-x-4'>
              <span className='bg-lightSky/5 p-4 rounded-md'>{info.icon}</span>
              <div>
                <h3 className='text-white/60 text-sm font-semibold'>
                  {info.title}
                </h3>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageLayout>
  );
};

export default Contact;
