import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a sophomore at Arizona State University, pursuing a B.S. in Computer Science with a minor in Data Science. My expertise spans programming, AI/ML frameworks, and cutting-edge research in computer vision. Passionate about innovation, I aim to design impactful AI solutions that improve lives and redefine technology's role in society.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented Computer Science student with a minor in Data Science at Arizona State University. My experience spans programming languages like Python, and Java,  as well as AI/ML frameworks such as TensorFlow and Scikit-Learn. With hands-on research in computer vision and AI, I thrive on designing innovative solutions. My journey in technology is driven by a curiosity for problem-solving and a dedication to impactful, real-world applications. Outside of academics, I enjoy staying active, exploring emerging technologies and working on personal projects that challenge and inspire me.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Predictive Models with Scikit-Learn",
    image: project1,
    description:
      "Built projects like Diabetes Prediction, Email Spam Detection, and Salary Prediction using Scikit-learn's Linear and Logistic Regression, leveraging the following technologies",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Processing"],
    link: "https://github.com/siripoluri/ML-Colab-projects"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "siripoluri09@gmail.com",
  LinkedIn: "https://www.linkedin.com/in/siri-poluri"
};
