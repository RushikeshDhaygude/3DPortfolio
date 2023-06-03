import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    Internshala,
    CodeIntuit,
    Linkcode,
    carrent,
    Ayush,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "CodeIntuit",
      icon: CodeIntuit,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - May 2023",
      points: [
        "Led a cross-functional team in developing a mobile application using React Native for the front end, Spring Boot for the backend, and MongoDB as the database.",
        "Implemented agile methodologies, following the Scrum framework, and effectively managed the project using Jira, organizing tasks into sprints and ensuring timely completion of deliverables.",
        "Participated in regular code reviews, providing valuable feedback to team members and ensuring code quality and adherence to best practices.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Linkode Technologies",
      icon: Linkcode,
      iconBg: "#383E56",
      date: "Aug 2021 - Sept 2021",
      points: [
        "Developed responsive and user-friendly websites using HTML, CSS, Bootstrap, and JavaScript.",
        "Collaborated with a team of skilled developers and received guidance from technical experts during a 2-month internship.",
        "Gained hands-on industrial experience in website development, understanding industry best practices and standards.",
        "Utilized GitHub for version control and collaborated effectively with colleagues, ensuring efficient code management and seamless teamwork.",
        "Proactively stayed updated with emerging web development trends and technologies, applying newfound knowledge to enhance project deliverables.",
      ],
    },
    {
      title: "Pyhton Developer",
      company_name: "Internshala Training",
      icon: Internshala,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2021",
      points: [
        "Completed comprehensive training in the basics of Python, gaining proficiency in the language's syntax, data structures, and core concepts.",
        "Utilized PyQt, a powerful GUI toolkit, to develop a web application that simulates a cricket score game, showcasing acquired skills in graphical user interface development.",
        "Integrated SQLite database into the application, enabling efficient data storage and retrieval.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "AYUSH",
      description:
        "Android application that enables users to search for hospitals,book an appointment, view available beds, and locate available hospitals based on their current location.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: Ayush,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };