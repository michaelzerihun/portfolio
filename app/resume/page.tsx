"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Code2, User } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Full-Stack Developer",
        company: "Kinetic Business Intelligence Inc.",
        period: "2022 - Present",
        description:
          // "Led the end-to-end full-stack development of the Canvaza SaaS platform and its 2.0 UI overhaul, engineering interactive frontend features like real-time collaboration while architecting and implementing robust backend functionalities for file storage and workspace creation using NestJS/Firebase. Developed critical dashboards for Africa CDC and contributed to the EthioChicken Dashboard, where I optimized performance and worked with Firebase/NestJS microservices leveraging Google Cloud Services. Solely developed the WASS Insurance Reminder System, managing its PostgreSQL database and REST APIs, and improving application performance by 15% through efficient state management. Mentored junior developers and implemented best practices for code quality.",
          "Led the end-to-end full-stack development of multiple web applications, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
        highlights: [
          "React",
          "Javascript",
          "Next.js",
          "TypeScript",
          "Shadcn",
          "Nest.js",
          "Node.js",
          "Firebase",
          "PostgreSQL",
          "API integration",
          "Performance Optimization",
          "Data Visualization",
          "MongoDB",
          "Redux",
          "Google Cloud Services",
          "Git",
          "Framer Motion",
          "Figma",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "Eagle Lion Systems Technologies Inc.",
        period: "2024 - Present",
        description:
          "Led the development of multiple Nextjs-based web applications, making robust and scalable applications implement state of the art state management and fetching logic using Tanstack React Query. ",
        highlights: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Shadcn",
          "MongoDB",
          "Firebase",
          "Tailwind CSS",
          "TanStack React Query",
          "Git",
          "Figma",
        ],
      },
      // {
      //   role: 'Full Stack Developer',
      //   company: 'Digital Innovations Ltd',
      //   period: '2018 - 2021',
      //   description:
      //     'Developed and maintained full-stack applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.',
      //   highlights: ['Node.js', 'React', 'MongoDB', 'AWS'],
      // },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Bachelor of Computer Science",
        institution: "HiLCoE School of Computer Science and Technology",
        description:
          "Completed rigorous coursework in algorithms, data structures, and software engineering principles. Actively participated in competitive programming challenges and hackathons while maintaining academic excellence. Led the Programming Club, organizing workshops and mentoring fellow students in modern development practices.",

        achievements: ["Programming Club Lead"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Expert in building dynamic, responsive user interfaces with React, Next.js, and TypeScript, leveraging modern CSS frameworks like Tailwind CSS and component libraries for optimal UX.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description:
          "Proficient in crafting robust, scalable server-side applications and RESTful APIs using Node.js, NestJS, and databases like PostgreSQL & MongoDB, including Firebase & Google Cloud Services.",
        skills: [
          "Node.js",
          "Nest.js",
          "Express.js",
          "Python",
          "PostgreSQL",
          "MongoDB",
        ],
      },
      {
        name: "State Management",
        description:
          "Experienced with Redux, TanStack React Query, Zustand, and React Context API for efficient and predictable application state management.",
        skills: [
          "Tanstack React Query",
          "Redux",
          "Zustand",
          "React Context API",
          "Jotai",
          "Recoil",
        ],
      },
      {
        name: "API Integration",
        description:
          "Seamlessly integrating third-party APIs and developing custom REST APIs for data exchange and system interoperability.",
        skills: ["REST Api", "GraphQL", "gRPC", "SOAP"],
      },
      {
        name: "Performance Optimization",
        description:
          "Specialized in identifying and resolving bottlenecks to significantly improve application loading times, responsiveness, and overall efficiency.",
      },
      {
        name: "Tools & Others",
        skills: [
          "Git",
          "Postman",
          "Figma",
          "Docker",
          "AWS",
          "CI/CD",
          "Agile Methodologies",
        ],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate Full-Stack Developer with 3+ years building scalable web apps. Committed to clean, maintainable code with React, Next.js, Node.js, and modern tech. Strong advocate for user-centric design and performance.",
    interests: [
      "Programming",
      "UI/UX Design",
      "Machine Learning",
      "Tech Blog Reading",
      "Problem Solving",
    ],
    languages: ["English (Fluent)", "Amharic (Native)"],
  },
};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    <span className="hidden md:flex">{item.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-muted-foreground">
                            {item.company}
                          </p>
                        </div>
                        {/* <div className='flex items-center text-muted-foreground'>
                          <Calendar className='h-4 w-4 mr-2' />
                          {item.period}
                        </div> */}
                      </div>
                      <p className="mb-4 text-sm md:text-base">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        {/* <div className='flex items-center text-muted-foreground'>
                          <Calendar className='h-4 w-4 mr-2' />
                          {item.period}
                        </div> */}
                      </div>
                      <p className="mb-4 text-sm md:text-base">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills?.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-sm md:text-base">
                    {tabContent.about.bio}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
