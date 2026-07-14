import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  // financialflowimage,
  // enterpriseapitester,
  atsscreenerlanding,
  github,
  mongodb,
  microsoft,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "awards",
    title: "Awards",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "BSc in Computer Science",
    company_name: "Admas University, Addis Ababa, Ethiopia",
    icon: backend,
    iconBg: "#0f3460",
    date: "Aug 2017 – Sep 2021",
    points: [
      "EQF Level 6 — Bachelor of Science in Computer Science.",
      "Studied core areas including software engineering, networks, data structures, and systems design.",
    ],
  },
  {
    title: "MSc in Project Management and Planning",
    company_name: "Premium College, Addis Ababa, Ethiopia",
    icon: fullstack,
    iconBg: "#1a1a2e",
    date: "May 2022 – Aug 2024",
    points: [
      "EQF Level 7 — Master of Science in Project Management and Planning.",
      "Focused on strategic project planning, resource management, and enterprise delivery frameworks.",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: "Technology Officer",
    company_name: "NISS",
    icon: fullstack,
    iconBg: "#1a1a2e",
    date: "June 2023 – Present",
    points: [
      "Lead research and development initiatives in emerging technologies & system development.",
      "Manage and optimize enterprise-level IT infrastructure for maximum efficiency and security.",
      "Collaborate with cross-functional teams to drive technology adoption and innovation.",
    ],
  },
  {
    title: "ICT Trainer & Technician",
    company_name: "Admas University",
    icon: backend,
    iconBg: "#0f3460",
    date: "Feb 2022 – Present",
    points: [
      "Teach ICT courses to Diploma students, covering software applications and IT fundamentals.",
      "Manage and maintain university computer labs, ensuring hardware and software functionality.",
      "Provide technical support for students and staff, troubleshooting a wide range of IT issues.",
      "Recognized as 'Best ICT Instructor' for outstanding teaching and student engagement.",
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "MMCYTECH",
    icon: mobile,
    iconBg: "#16213e",
    date: "Jan 2023 – Apr 2024",
    points: [
      "Provided technical support for clients, troubleshooting hardware, software, and network issues.",
      "Installed, configured, and maintained IT systems to ensure optimal performance.",
      "Assisted in the deployment of new technologies and provided user training.",
      "Collaborated with teams to resolve technical issues and improve service efficiency.",
    ],
  },
  {
    title: "IT Expert",
    company_name: "Bridge Marketing",
    icon: web,
    iconBg: "#1b1b2f",
    date: "Apr 2019 – Aug 2022",
    points: [
      "Played a key role in maintaining and troubleshooting the company's IT infrastructure.",
      "Provided comprehensive IT support to in-office and remote employees.",
      "Managed network configurations and system backups to ensure data integrity.",
    ],
  },
  {
    title: "ICT Trainer (Intern)",
    company_name: "New Bright Community",
    icon: google,
    iconBg: "#0d0d0d",
    date: "Jan 2022 – Apr 2022",
    points: [
      "Taught high school and elementary students basic computer and ICT skills.",
      "Performed routine computer maintenance and troubleshooting.",
      "Managed and maintained the center's computer inventory control system.",
    ],
  },
];


const awards = [
  {
    title: "Best ICT Instructor",
    type: "Honours & Awards | Admas University",
    icon: otu,
    iconBg: "#333333",
    date: "Jul 2023",
    points: [
      "Awarded for outstanding performance in the role of ICT Trainer.",
      "Recognized for excellence in student engagement and course instruction."
    ],
  },
  {
    title: "Well-Rounded Leader",
    type: "Honours & Awards | NISS",
    icon: fullstack,
    iconBg: "#1a1a2e",
    date: "Nov 2023",
    points: [
      "Acknowledged for exceptional contributions to the R&D department.",
      "Recognized for leading technology adoption initiatives."
    ],
  },
  {
    title: "Certificate of Excellence",
    type: "Honours & Awards | NISS",
    icon: fullstack,
    iconBg: "#0f3460",
    date: "Oct 2024",
    points: [
      "Recognized for exemplary performance and dedication in professional work of the year."
    ],
  },
];

const extracurricular = [
  {
    title: "Computer Maintenance and Networking",
    type: "Certifications & Training | Satcom Institute of Technology",
    icon: ubuntu,
    iconBg: "#E95420",
    date: "Dec 13, 2021",
    points: [
      "Hardware & Software maintenance and server-based Networking."
    ],
  },
  {
    title: "Programming in C#",
    type: "Certifications & Training | New Horizon",
    icon: microsoft,
    iconBg: "#000000",
    date: "Feb 7, 2016",
    points: [
      "Foundational coding paradigms, OOP, and development with C# and .NET."
    ],
  },
  {
    title: "Hardware and Network Servicing Level (1-4)",
    type: "Certifications & Training | TVET Agency",
    icon: cisco,
    iconBg: "#005A70",
    date: "Jul 14, 2022",
    points: [
      "Network design, hardware configuration, hardware troubleshooting, and servicing protocols."
    ],
  },
  {
    title: "COC Certified Level 4 in Hardware and Network Servicing",
    type: "Certifications & Training | Federal TVET Agency",
    icon: cisco,
    iconBg: "#005A70",
    date: "Mar 2022",
    points: [
      "National Certificate of Competency (COC) in Hardware and Network Servicing."
    ],
  },
  {
    title: "Technical Support",
    type: "Professional Certificate | Coursera",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2021",
    points: [
      "Operating systems, system administration, client-side troubleshooting, and IT support services."
    ],
    credential: "https://www.coursera.org",
  },
  {
    title: "Oracle Certified Foundations Associate",
    type: "Certifications & Training | Oracle University",
    icon: postgresql,
    iconBg: "#1a1a2e",
    date: "Jun 27, 2023",
    points: [
      "Database schema designs, query writing, and basic relational algebra."
    ],
  },
  {
    title: "Introduction to Cyber Security",
    type: "Certifications & Training | Great Learning",
    icon: kalilinux,
    iconBg: "#000000",
    date: "Jun 2023",
    points: [
      "Covered network vulnerabilities, protection layers, encryption, and basic defense patterns."
    ],
  },
  {
    title: "Android Developer Fundamentals",
    type: "Certifications & Training | UDACITY",
    icon: mobile,
    iconBg: "#3DDC84",
    date: "Aug 16, 2024",
    points: [
      "Mobile development with Android Studio, API integrations, and local storage design."
    ],
  },
];

const projects = [
  // ── Category 1: AI, Signal Processing & R&D ──
  {
    name: "Anti-Drone Detection & Identification",
    description:
      "Developed and tested a real-time anti-drone platform capable of detecting, identifying, and alerting on unauthorized UAV activity. Integrated hardware RF sensors and backend modules for signal capture and analysis.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "RF-Modules", color: "pink-text-gradient" },
      { name: "Leaflet.js", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
    ],
    image: "",
    category: "ai_r&d",
    categoryEmoji: "🤖",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Signal Analysis & Research DB",
    description:
      "Created a centralized signal research platform for storing, analyzing, and classifying unknown signals based on modulation type, parameters, and spectrum visualization.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "Chart.js", color: "blue-text-gradient" },
    ],
    image: "",
    category: "ai_r&d",
    categoryEmoji: "📊",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Drone Frequency Stream Capture",
    description:
      "Conducted exploratory research on methods of capturing and analyzing live video streams transmitted over drone communication frequencies. Focused on signal decoding, frequency spectrum capture, and protocol study.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SDR", color: "green-text-gradient" },
      { name: "GNURadio", color: "pink-text-gradient" },
    ],
    image: "",
    category: "ai_r&d",
    categoryEmoji: "📡",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "AI Signal Classifier",
    description:
      "Developed a machine learning model to classify different types of radio signals (AM, FM, PSK, QAM) using spectrum data.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "Keras", color: "pink-text-gradient" },
      { name: "NumPy", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
    ],
    image: "",
    category: "ai_r&d",
    categoryEmoji: "🧠",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Live Audio Packet Streaming (Kafka)",
    description:
      "Developed a C++ Kafka producer/consumer system to broadcast live audio signals from remote locations using VHF radios, ensuring real-time data transmission and processing.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Apache-Kafka", color: "green-text-gradient" },
      { name: "VHF-Radio", color: "pink-text-gradient" },
      { name: "Networking", color: "blue-text-gradient" },
    ],
    image: "",
    category: "ai_r&d",
    categoryEmoji: "📻",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },

  // ── Category 2: Web & System Development ──
  {
    name: "YOYO Driving License Exam App",
    description:
      "A desktop application built with Python & PyQt5 for training and assessing driving license exams. Users select license type, enter student info, take a timed 50-question exam, and get results.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyQt5", color: "green-text-gradient" },
      { name: "CSV", color: "pink-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "🚗",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Driving School Management",
    description:
      "A full-featured web application designed to automate driving school operations — from student registration to car management, class scheduling, and fee tracking.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "HTML5/CSS3", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "🏫",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "Designed and developed this personal portfolio website to showcase my projects, skills, and professional experience. Built with modern web technologies, focusing on a clean, responsive design and a great user experience.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "Vite", color: "blue-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "💼",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "https://github.com/TargetLocation",
  },
  {
    name: "Project Management System (PMS)",
    description:
      "Designed and enhanced a multi-role project and performance management system for institutional use. Implemented modules for plan tracking, task management, and data visualization for directors and staff.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Simcify-PHP", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "📅",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "User Analytics & Dashboard",
    description:
      "Built a performance tracking and analytics dashboard that monitors user engagement, project contribution, and task efficiency. Designed for multi-role access (Admin, Coordinator, Team Leader).",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Chart.js", color: "pink-text-gradient" },
      { name: "Bootstrap", color: "blue-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "📈",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "AI-Powered Overtime Management",
    description:
      "Developed a smart overtime tracking platform with AI-driven insights to monitor employee work hours, generate automated reports, and detect irregularities.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "AI-Analytics", color: "pink-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "⏰",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Psy Addis (Event Website)",
    description:
      "An event platform for Greek and electronic music festivals in Addis Ababa, featuring event listings, galleries, and admin management.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "🎵",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Summit Connect",
    description:
      "A dynamic web platform for managing bookings and call schedules for an outsourcing company, including admin dashboards and client interaction tools.",
    tags: [
      { name: "PHP-Simcify", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "📞",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Lalibela Restaurant Platform",
    description:
      "A full-feature restaurant website with booking system, barcode checks, and an automated notification system.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "Barcode-Scanner", color: "blue-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "🍲",
    source_code_link: "https://github.com/Eyob-T295/Lalibela-Restaurant",
    live_project_link: "",
  },
  {
    name: "Linux PMS System Deployment",
    description:
      "Led the end-to-end deployment of a PHP-based Project Management System onto a production Ubuntu server. This involved configuring the full LEMP stack from scratch, with a strong focus on performance, security, and scalability.",
    tags: [
      { name: "Nginx", color: "blue-text-gradient" },
      { name: "PHP-FPM", color: "green-text-gradient" },
      { name: "MariaDB", color: "pink-text-gradient" },
      { name: "Ubuntu-Server", color: "blue-text-gradient" },
      { name: "Systemd/UFW", color: "green-text-gradient" },
      { name: "Fail2Ban", color: "pink-text-gradient" },
    ],
    image: "",
    category: "web_systems",
    categoryEmoji: "🖥️",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },

  // ── Category 3: Mobile & Client Projects ──
  {
    name: "Blue-Nile Injera Mobile",
    description:
      "A mobile app (iOS & Android) and web admin panel for managing orders, tracking, and customer management.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "REST-API", color: "blue-text-gradient" },
    ],
    image: "",
    category: "mobile_client",
    categoryEmoji: "📱",
    source_code_link: "https://github.com/Eyob-T295",
    live_project_link: "",
  },
  {
    name: "Asthma Health Tracker",
    description:
      "Created a simple mobile health tracker to monitor asthma symptoms, medicine intake, and environmental triggers, with personalized reminders.",
    tags: [
      { name: "React-Native", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Chart.js", color: "pink-text-gradient" },
    ],
    image: "",
    category: "mobile_client",
    categoryEmoji: "🫁",
    source_code_link: "https://github.com/Eyob-T295/asthma-tracker",
    live_project_link: "",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  awards,
  projects,
  education,
  testimonials
};
