import project1 from "../assets/projects/project-1.jpg";
import ASULostandFound from "../assets/projects/ASULostandFound.jpg";
import SparkyAI from "../assets/projects/SparkyAI.jpg";


export const HERO_CONTENT = `I am a sophomore at Arizona State University, pursuing a B.S. in Computer Science. My expertise spans programming, AI/ML frameworks, and cutting-edge research in computer vision and natural language processing. Passionate about innovation, I aim to design impactful AI solutions that improve lives and redefine technology's role in society.`;

export const EXPERIENCES = [
  {
    //year: "2023 - Present",
    role: "Research Assitant(CV and ML)",
    company: "Arizona State University",
    description: `Currently working on cutting-edge research in video question answering, enabling AI to reason about events, causes, and what-if scenarios in videos.
Using state-of-the-art models like Video-LLaMA2 and Qwen2-VL, fine-tuned on custom datasets with complex reasoning tasks.
Driving innovation through novel evaluation techniques and ablation studies to measure deep understanding and generalization.
Focused on explainability by visualizing model attention and saliency to uncover how AI interprets dynamic visual scenes.
`,
    technologies: ["PyTorch", "DeepSeek VideoQA model","Hugging Face Transformers", "TrafficQA Datasets","ASU’s SOL GPU cluster"],
  }, 

];

export const PROJECTS = [
  {
    title: "SparkyAI",
    image: SparkyAI,
    description:
      "Designed SparkyAI, a sophisticated Discord bot tailored for ASU students, providing comprehensive access to campus resources such as news, events, scholarships, and courses. Leveraged cutting-edge technologies including Retrieval-Augmented Generation (RAG) for precise information retrieval, Multi-Agent System for task execution, and Vector Database powered by Qdrant. Implemented features like Maximum Inner Product Search (MIPS) and RAPTOR Retrieval for optimized search capabilities, alongside dynamic content extraction and automatic version control. Integrated seamless Discord interaction and utilized advanced AI models for accurate response generation, setting a new standard for AI-driven student support systems",
    technologies: ["Python", "Gemini", "LangChain", "Tensorflow", "Hugging Face Transformers, NLTK", "BAAI/bge-large-en-v1.5 model embeddings", "Qdrant", "Selenium, BeautifulSoup4", "Discord API", "Firebase API", "Firestore", "Notion", "Asyncio", "Docker"],
    link: "https://github.com/ashworks1706/SparkyAI?tab=readme-ov-file#key-features",
    link: "https://sparkyai.vercel.app/"
  },
  {
    title: "Predictive Models with Scikit-Learn",
    image: project1,
    description:
      "Built projects like Diabetes Prediction, Email Spam Detection, and Salary Prediction using Scikit-learn's Linear and Logistic Regression, leveraging the following technologies",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Processing"],
    link: "https://github.com/siripoluri/ML-Colab-projects"
  },
  {
    title: "ASU Lost and Found",
    image: ASULostandFound,
    description: "Developed ASU Lost & Found, a dynamic platform enabling students to report and locate lost items seamlessly. Engineered with React and integrated Firebase and MongoDB for real-time data management. Ensured secure interactions via ASU email authentication and included an intuitive messaging system for direct user communication.",
    technologies: ["HTML", "CSS", "React", "Javascript", "Firebase", "MongoDB"],
    link: "https://github.com/siripoluri/ASU-Lost-and-Found/tree/master"
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "siripoluri09@gmail.com",
  LinkedIn: "https://www.linkedin.com/in/siri-poluri"
};

/*
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
*/