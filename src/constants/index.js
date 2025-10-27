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
  postgres,
  bootstrap,
  crewai,
  java,
  python,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  broadstack,
  awign,
  deloitte,
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
    title: "React Native Developer",
    icon: web,
  },
  {
    title: "DSA",
    icon: backend,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "Python",
    icon: python,
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
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "PostgreSQL",
    icon: postgres,
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
    name: "Crew AI",
    icon: crewai,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Broadstack Technologies",
    icon: broadstack,
    iconBg: "#383E56",
    date: "February 2025 - May 2025",
    points: [
      "Built EmptySeats – A full-stack ride-sharing app with role-based access, real-time booking (Socket.IO), modular dashboards, and a normalized PostgreSQL database. Developed and tested REST APIs in VS Code.",
      "Created Agentic AI Testing Workbench – An end-to-end QA platform using CrewAI, FastAPI, and Node.js to automate user story ingestion, enhancement, test generation, execution (Playwright), and defect summarization.",
      "Developed a drag-and-drop agent workflow editor with React Flow, enabling users to visually connect AI agents and trigger execution pipelines from a dynamic UI.",
      "Integrated locally hosted LLMs (Mistral via Ollama) with CrewAI agents for offline, secure execution. Created modular agents for story enhancement, test generation, and defect reporting.",
      "Worked in an agile remote team to deploy production-ready features. Used Git, Postman, and VS Code for API testing, debugging, and iterative delivery.",
    ],
  },
  {
    title: "Quality Assurance Engineer Intern",
    company_name: "Awign Enterprises Pvt Ltd",
    icon: awign,
    iconBg: "#E6DEDD",
    date: "May 2025 - July 2025",
    points: [
      "Performed end-to-end manual and exploratory testing of APIs (Postman) and UI. Created detailed test cases and worked with developers for efficient bug resolution.",
      "Handled regression testing during builds to ensure new changes didn’t break existing features. Maintained consistent test logs across sprints.",
      "Used JIRA for bug tracking and test documentation. Participated in daily stand-ups, sprint planning, and agile retrospectives.",
      "Ensured high-quality releases under tight deadlines by taking ownership and maintaining strong attention to detail.",
      "Collaborated with developers, designers, and product managers in an agile setup to align on functionality and improve user experience.",
    ],
  },
  {
    title: "Analyst",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Undergoing hands-on training in HTML, CSS, and Bootstrap, with a focus on writing clean, accessible, and responsive UI code.",
      "Learning frontend best practices, semantic structuring, mobile-first design, and cross-browser compatibility.",
      "Preparing to contribute to upcoming client-facing projects as part of the frontend development team.",
      "Collaborating with peers and mentors to build UI components and layouts that follow Deloitte’s design standards.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "AI Medical Voice Agent",
    description:
      "Web application that transforms healthcare with 24/7 AI voice support. Our assistant handles appointment booking, symptom triage, and follow-ups through natural voice conversations — improving patient care and reducing staff workload.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "open-ai",
        color: "green-text-gradient",
      },
      {
        name: "vapi-voice-ai",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ruddy7/AI-Medical-Voice-Agent",
  },
  {
    name: "AI Trip Planner",
    description:
      "A web platform that uses AI to create personalized travel itineraries based on your destination, trip duration, number of travelers, and budget. Get smart suggestions for attractions, activities, stays, and transport—tailored to your preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ruddy7/AI-Trip-Planner",
  },
  {
    name: "Salon Voice Helpdesk",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ruddy7/Salon-Voice-Helpdesk",
  },
];

export { services, technologies, experiences, testimonials, projects };
