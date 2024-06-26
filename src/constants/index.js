
import ssone from "../assets/gallery/ssone.webp";
import screen2 from "../assets/gallery/screen2.webp";
import screen3 from "../assets/gallery/screen3.webp";
import screen4 from "../assets/gallery/screen4.webp";
import screen8 from "../assets/gallery/screen8.webp";
import screen9 from "../assets/gallery/screen9.webp";
import jjlogo from "../assets/jjlogo.webp";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Flow",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "faqs",
    title: "FAQs",
  },
  {
    id: "redirect",
    title: "Add to Chrome ✨",
    href: "https://chrome.google.com/webstore/detail/lynk/pjlnajjbbpjgimaidaoinoeebehkcboj?hl=en"
  },
];


const services = [
  {
    title: "Dynamic Cover Letters",
    description: "AI-crafted letters in under 20 seconds, tailored for each LinkedIn job."
  },
  {
    title: "Resume Reinvention",
    description: "Elevate your CV, making it tailored, modern, and standout."
  },
  {
    title: "One-Click Application",
    description: "Apply on LinkedIn with a click, attaching your custom cover letter and resume."
  },
  {
    title: "Backend Mastery",
    description: "Experience seamless interactions with our robust Flask backend."
  },
  {
    title: "Data Defense",
    description: "Top-tier security features ensure your data remains safe and private."
  },
  {
    title: "User-Friendly UI",
    description: "An intuitive design for easy navigation and optimized user experience."
  },
  {
    title: "Continuous Updates",
    description: "Stay ahead with regular feature updates and optimizations."
  },
  {
    title: "Integrated Excellence",
    description: "Direct features on LinkedIn job pages for seamless application flow."
  }
];



const experiences = [
  {
    title: "Installation",
    icon: jjlogo,
    iconBg: "#383E56",
    date: "Step 1",
    points: [
      "Navigate to the Chrome Web Store and search for 'Job Jolt'.",
      "Alternatively, follow the link provided to directly access the extension.",
      "After successful installation, look for the Job Jolt icon on your browser toolbar."
    ],
  },
  {
    title: "Initial Setup",
    icon: jjlogo,
    iconBg: "black",
    date: "Step 2",
    points: [
      "Open the extension and complete the login process.",
      "Enter your OpenAI API key in the extension popup panel.",
      "Upload your resume within the extension popup for a seamless experience.",
      "Set everything up quickly & gear up for an intelligent job application process."
    ],
  },
  {
    title: "Application on LinkedIn",
    icon: jjlogo,
    iconBg: "#383E56",
    date: "Step 3",
    points: [
      "Go to a LinkedIn job page of your preference.",
      "Identify the Job Jolt buttons integrated for your ease.",
      "With a single click, create a custom cover letter or a revised resume.",
      "Witness the blend of automation with a personal touch."
    ],
  },
  {
    title: "Witness AI Capabilities",
    icon: jjlogo,
    iconBg: "black",
    date: "Step 4",
    points: [
      "Experience how AI discerns crucial job details.",
      "See tailored application materials being generated in real-time.",
      "Leverage OpenAI's cutting-edge algorithms for optimal results.",
      "Differentiate yourself with AI-powered application materials."
    ],
  },
  {
    title: "Final Submission",
    icon: jjlogo,
    iconBg: "#383E56",
    date: "Step 5",
    points: [
      "With AI-backed cover letter and resume in hand, make a lasting impact.",
      "Submit your applications with added confidence and quality assurance.",
      "Boost the probability of securing interviews and job offers.",
      "Embrace the next generation of job applications with Job Jolt."
    ],
  },
];



const faqs = [
  {
    question: "What makes Job Jolt unique compared to other job tools?",
    answer: "Job Jolt offers direct integration with LinkedIn, enabling a seamless experience to craft tailored cover letters and enhanced resumes. At its heart is GPT-3.5 Turbo, ensuring your documents align perfectly with the job description, providing a distinct edge in the job market."
  },
  {
    question: "How efficient is the cover letter generation with Job Jolt?",
    answer: "You can generate a custom cover letter for a specific LinkedIn job in a remarkable 20 seconds or less. It's designed for efficiency and enhancing your application's impact."
  },
  {
    question: "How reliable is the resume revamping feature and the costs associated?",
    answer: "Though our resume feature is in beta, it employs sophisticated algorithms to match job descriptions. We advise fine-tuning its suggestions. Moreover, Job Jolt is completely free! We appreciate positive reviews and support for our other projects."
  },
  {
    question: "How does Job Jolt improve my LinkedIn application process?",
    answer: "Job Jolt, with just a click, pulls essential details from job listings, such as company info and recruiter data, streamlining and personalizing your application process."
  },
  {
    question: "How does Job Jolt prioritize data security?",
    answer: "Your privacy is our top concern. Job Jolt has robust security layers to ensure data protection. Only crucial information is retained, with everything else being automatically deleted for your security."
  },
  {
    question: "How can I interact and integrate with Job Jolt?",
    answer: "We always welcome feedback. For any issues or suggestions, or if you want to leverage GPT-4 with Job Jolt, please contact our support team via our website or the extension's feedback form."
  }
];




const appScreenshots = [
  {
    name: "Screen 1",
    description: "LinkedIn Job page with Job Jolt integrated",
    image: ssone
  },
  {
    name: "Screen 2",
    description: "Overview of the Job elements extracted by JJ",
    image: screen2
  },
  {
    name: "Screen 3",
    description: "Login view",
    image: screen3
  },
  {
    name: "Screen 4",
    description: "Popup panel view",
    image: screen4
  },
  {
    name: "Screen 5",
    description: "Generating a cv with Job Jolt",
    image: screen8
  },
  {
    name: "Screen 6",
    description: "Automatic download of generated CV",
    image: screen9
  }

];


export { services, experiences, faqs, appScreenshots };
