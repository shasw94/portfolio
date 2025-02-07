import { FaCode, FaServer, FaToolbox, FaBrain, FaDatabase } from 'react-icons/fa';
import { SiReact, SiTensorflow, SiDocker } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

export const personalInfo = {
    name: "Shaswat Pandey",
    contacts: [
        "pandeyshaswat4@gmail.com",
        "+44 07587408692",
        "linkedin.com/in/shaswat-pandey",
        "GitHub: /shasw94",
        "GitLab: /shas94"
    ],
    // Add other data sections similarly
};

export const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shaswat-pandey',
      icon: <FaLinkedin />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/shasw94',
      icon: <FaGithub />,
    },
    {
      name: 'GitLab',
      url: 'https://gitlab.com/shas94',
      icon: <FaGitlab />,
    }
  ];
export const education = [
    {
      university: "University of Reading",
      degree: "MSc in Data Science and Advanced Computing",
      location: "Reading, United Kingdom",
      dates: "Sep 2023 - Sep 2024",
      scholarship: "Received scholarship worth £4000 for tuition",
      projects: [
        {
          title: "Multi-agent LLM System",
          description: "Developed containerized LLM system using multiple base models, improved MetaGPT framework performance",
          link: "#"
        },
        {
          title: "Tweet Emotion Classification",
          description: "Built pipeline with GLoVE embeddings & Bi-LSTM layers (94% accuracy)",
          link: "#"
        },
        {
          title: "Flight Delay Prediction",
          description: "Integrated weather API & historical data using Databricks, Azure ML, and Power BI"
        }
      ]
    },
    {
      university: "Motilal Nehru National Institute of Technology",
      degree: "BTech in Electronics and Communication Engineering",
      location: "Allahabad, India",
      dates: "May 2013 - May 2017",
      projects: [
        {
          title: "Facial Recognition Attendance System",
          description: "Developed campus-wide attendance system using OpenCV and Python"
        }
      ]
    }
  ];

export const experience = [
    {
      position: "Software Engineer",
      company: "Hitachi Energy",
      location: "Kathmandu, Nepal",
      dates: "Nov 2021 - Sep 2023",
      points: [
        "Developed full-stack ETRM applications using TSQL, PHP & JavaScript",
        "Automated system configurations with Golang, reducing setup time from 4hrs → 5min",
        "Optimized legacy stored procedures, improving page load time by 70%",
        "Implemented Docker-based containerization for deployment workflows",
        "Created SQL-based Monte-Carlo simulations for energy trading analysis"
      ],
      tech: ["Golang", "Docker", "MS SQL", "PHP", "JavaScript", "TSQL", "Azure"]
    },
    {
      position: "Co-founder & Lead Developer",
      company: "Bhumi Agri",
      location: "Delhi, India",
      dates: "Oct 2020 - Mar 2021",
      points: [
        "Built multilingual farm management app with 10k+ users using Flutter",
        "Implemented plant disease detection with 89% accuracy using TensorFlow",
        "Designed AWS cloud architecture handling 50k+ daily API requests",
        "Integrated Google Maps for real-time produce logistics tracking",
        "Developed Redis-backed caching system improving API response by 40%"
      ],
      tech: ["Flutter", "TensorFlow", "AWS", "Redis", "Python", "Java", "Google Maps"]
    },
    {
      position: "Software Development Engineer",
      company: "Avataar.me",
      location: "Bengaluru, India",
      dates: "May 2020 - Oct 2020",
      points: [
        "Led development of WebGL-based AR viewer for e-commerce platforms",
        "Created Facebook-hosted 2D games with 300k+ MAU",
        "Optimized 3D model loading times by 40% through lazy loading",
        "Implemented real-time user interactions for AR experiences",
        "Developed analytics dashboard for user engagement tracking"
      ],
      tech: ["WebGL", "Three.js", "React", "Node.js", "AWS", "WebSocket"]
    },
    {
      position: "Application Developer",
      company: "Drivezy Inc.",
      location: "Bengaluru, India",
      dates: "May 2017 - May 2020",
      points: [
        "Built custom SVG/Canvas charting library for analytics dashboards",
        "Migrated legacy PHP to Nest.js, reducing response times by 60%",
        "Developed proprietary OCR system replacing Google Vision API",
        "Created CNN model for ID classification with 95% accuracy",
        "Designed vehicle optimization algorithm boosting revenue by 25%"
      ],
      tech: ["Nest.js", "Python", "TensorFlow", "OpenCV", "Angular", "PostgreSQL"]
    }
  ];
  
  // Rest of your data (personalInfo, education, techSkills) remains same


export const techSkills = [
  {
    category: "Programming Languages",
    icon: <FaCode />,
    skills: ["Python", "PHP", "Go", "JavaScript", "Node.js"],
    color: "#2ecc71"
  },
  {
    category: "Frameworks",
    icon: <FaServer />,
    skills: ["Nest.js", "Flask", "Laravel", "Flutter"],
    color: "#3498db"
  },
  {
    category: "Libraries",
    icon: <SiReact />,
    skills: ["React", "Keras", "TensorFlow", "PyTorch", "SciKit", "Pytest"],
    color: "#9b59b6"
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    skills: ["MySQL", "PostgreSQL", "Firebase", "MSSQL"],
    color: "#e67e22"
  },
  {
    category: "Tools",
    icon: <FaToolbox />,
    skills: ["Apache Spark", "Databricks", "Docker", "Azure ML"],
    color: "#e74c3c"
  }
];