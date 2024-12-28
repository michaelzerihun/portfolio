'use client';
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Briefcase,
  Calendar,
  Check,
  Code2,
  GraduationCap,
  User,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

const tabMenu = [
  {
    title: 'Experience',
    value: 'experience',
    icon: Briefcase,
  },
  {
    title: 'Education',
    value: 'education',
    icon: GraduationCap,
  },
  {
    title: 'Skills',
    value: 'skills',
    icon: Code2,
  },
  {
    title: 'About me',
    value: 'about me',
    icon: User,
  },
];

const tabContent = {
  experience: {
    title: 'Professional Experience',
    items: [
      {
        role: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: 'Jan 2022 - Present',
        description:
          'led a team of developers in building and maintaining web applications. Improving user experience and ensuring the quality of the codebase.',
        highlights: ['React', 'Next.js', 'TypeScript', 'Redux'],
      },
      {
        role: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: 'Jan 2022 - Present',
        description:
          'led a team of developers in building and maintaining web applications. Improving user experience and ensuring the quality of the codebase.',
        highlights: ['React', 'Next.js', 'TypeScript', 'Redux'],
      },
      {
        role: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: 'Jan 2022 - Present',
        description:
          'led a team of developers in building and maintaining web applications. Improving user experience and ensuring the quality of the codebase.',
        highlights: ['React', 'Next.js', 'TypeScript', 'Redux'],
      },
    ],
  },
  education: {
    title: 'Educational Background',
    items: [
      {
        degree: 'Master of Computer Science',
        institution: 'University of Technology',
        period: '2018 - 2020',
        description:
          "graduated with honors and received the Dean's Award for academic excellence.",
        achievements: [
          'Graduated with honors',
          'Deans Award for academic excellence',
        ],
      },
      {
        degree: 'Master of Computer Science',
        institution: 'University of Technology',
        period: '2018 - 2020',
        description:
          "graduated with honors and received the Dean's Award for academic excellence.",
        achievements: [
          'Graduated with honors',
          'Deans Award for academic excellence',
        ],
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      {
        name: 'Frontend Development',
        description:
          'Proficient in frontend development using React, Next.js, TypeScript, and Redux.',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'Redux',
          'Tailwind CSS',
          'Material UI',
        ],
      },
      {
        name: 'Frontend Development',
        description:
          'Proficient in frontend development using React, Next.js, TypeScript, and Redux.',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'Redux',
          'Tailwind CSS',
          'Material UI',
        ],
      },
      {
        name: 'Frontend Development',
        description:
          'Proficient in frontend development using React, Next.js, TypeScript, and Redux.',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'Redux',
          'Tailwind CSS',
          'Material UI',
        ],
      },
      {
        name: 'Frontend Development',
        description:
          'Proficient in frontend development using React, Next.js, TypeScript, and Redux.',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'Redux',
          'Tailwind CSS',
          'Material UI',
        ],
      },
    ],
  },
  about: {
    title: 'About Me',
    bio: 'I am a passionate and experienced frontend developer with a strong background in building web applications using React, Next.js, TypeScript, and Redux. I have a proven track record of delivering high-quality code and creating exceptional user experiences.',
    interests: [
      'Web Development',
      'UI/UX Design',
      'Open Source Contribution',
      'Traveling',
      'Reading',
      'Machine learning',
      'Tech blogging',
    ],
    langugages: ['English(Fluent)', 'Spanish', 'French'],
  },
};

const Resume = () => {
  return (
    <div className='flex flex-col w-full min-h-[80vh] py-5 md:py-10'>
      <PageLayout>
        <Tabs
          defaultValue='experience'
          className='w-full flex flex-col md:flex-row gap-6 md:gap-10'
        >
          <TabsList className='flex md:flex-col h-full bg-transparent md:w-64 gap-2 md:gap-4'>
            {tabMenu.map((item) => (
              <TabsTrigger
                className='bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm'
                key={item?.value}
                value={item?.value}
              >
                <div className='flex items-center gap-1.5 md:w-[50%] md:gap-3'>
                  <item.icon className='w-4 h-4 md:w-5 md:h-5' />
                  {item.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className='flex-1 min-h-[400px]'>
            <TabsContent value='experience'>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-2xl font-bold mb-6 text-lightSky'
              >
                {tabContent.experience.title}
              </motion.h2>
              <div className='space-y-6 '>
                {tabContent.experience.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className='border rounded-lg border-lightSky/20 p-6'
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-lg font-semibold'>{item.role}</h3>
                        <p className='text-muted-foreground'>{item.company}</p>
                      </div>
                      <div className='flex items-center text-muted-foreground'>
                        <Calendar className='w-4 h-4 mr-2' />
                        {item.period}
                      </div>
                    </div>
                    <p className='mb-4 text-white'>{item.description}</p>
                    <div className='flex flex-wrap gap-2'>
                      {item.highlights.map((highlight, index) => (
                        <Badge key={index} variant='secondary'>
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value='education'>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-2xl font-bold mb-6 text-lightSky'
              >
                {tabContent.education.title}
              </motion.h2>
              <div className='space-y-6 '>
                {tabContent.education.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className='border rounded-lg border-lightSky/20 p-6'
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-lg font-semibold'>{item.degree}</h3>
                        <p className='text-muted-foreground'>
                          {item.institution}
                        </p>
                      </div>
                      <div className='flex items-center text-muted-foreground'>
                        <Calendar className='w-4 h-4 mr-2' />
                        {item.period}
                      </div>
                    </div>
                    <p className='mb-4 text-white'>{item.description}</p>
                    <div className='flex flex-wrap gap-2'>
                      {item.achievements.map((achievement, index) => (
                        <Badge key={index} variant='secondary'>
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value='skills'>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-2xl font-bold mb-6 text-lightSky'
              >
                {tabContent.skills.title}
              </motion.h2>
              <div className='space-y-6 '>
                {tabContent.skills.categories.map((category, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className='border rounded-lg border-lightSky/20 p-6'
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-lg font-semibold'>
                          {category.name}
                        </h3>
                        <p className='text-muted-foreground'>
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {category.skills.map((skill, index) => (
                        <Badge key={index} variant='secondary'>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value='about me'>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-2xl font-bold mb-6 text-lightSky'
              >
                {tabContent.about.title}
              </motion.h2>
              <div className='space-y-6 '>
                {tabContent.experience.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className='border rounded-lg border-lightSky/20 p-6'
                  >
                    <p className='text-white/90 mb-6 text-lg'>
                      {tabContent.about.bio}
                    </p>
                    <div className='space-y-4'>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>
                          Interests
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                          {tabContent.about.interests.map((interest, index) => (
                            <Badge key={index} variant='secondary'>
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>
                          Languages
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                          {tabContent.about.langugages.map(
                            (language, index) => (
                              <Badge key={index} variant='secondary'>
                                {language}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default Resume;
