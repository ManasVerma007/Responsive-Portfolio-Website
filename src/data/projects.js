import cineverseThumbnail from '../assets/images/cineverse.png';
import imageRecognitionThumbnail from '../assets/images/image-recognition-service.png';
import logoexecutiveThumbnail from '../assets/images/logoexecutive.png';
import breastCancerPredictionThumbnail from '../assets/images/cancer-prediction.png';
import tabstackerThumbnail from '../assets/images/tabstacker.png';



export const projects = [
  {
    id: "cineverse",
    title: "Cineverse",
    description: "A responsive React application with distributed backend architecture for seamless access to the TMDB API, overcoming regional access issues.",
    image: cineverseThumbnail,
    tech: ["React", "TMDB API", "AWS EC2", "Nginx", "Let's Encrypt"],
    github: "https://github.com/ManasVerma007/movie-app",
    demo: "https://movie-app-lake-six.vercel.app/", 
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>Cineverse is a responsive movie discovery platform built with React and a distributed backend architecture.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Movie discovery and browsing</li>
        <li>Personalized collections</li>
        <li>Detailed information views</li>
        <li>Responsive design for all devices</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Deployed on Vercel (frontend) and AWS EC2 (backend) with HTTPS, utilizing Nginx as a reverse proxy and Let's Encrypt for secure communication, ensuring reliability and performance.</p>
    `
  },
  {
    id: "image-recognition",
    title: "Image Recognition Service",
    description: "An AI-powered image classifier using AWS services to detect and identify objects in user-uploaded images.",
    image: imageRecognitionThumbnail,
    tech: ["AWS Lambda", "S3", "Rekognition", "DynamoDB", "API Gateway"],
    github: "https://github.com/ManasVerma007/image-recognition-service",
    demo: "https://image-recognition-service.vercel.app/",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>This AI-powered image classifier utilizes AWS services to detect and identify objects in user-uploaded images.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Object detection in images</li>
        <li>Serverless architecture</li>
        <li>Scalable data storage</li>
        <li>Real-time image processing</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Executed a serverless architecture using AWS Lambda and API Gateway, integrating DynamoDB for scalable data storage and real-time image processing with AWS Rekognition.</p>
    `
  },
  {
    id: "logoexecutive",
    title: "Logoexecutive (Open Source)",
    description: "Contributed to Team Siksha's open-source project by implementing key features such as logo upload functionality and user account deletion.",
    image: logoexecutiveThumbnail,
    tech: ["S3", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/TeamShiksha/logoexecutive",
    demo: "https://www.openlogo.fyi",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>Contributed to Team Siksha's open-source project by implementing key features to enhance user experience and system efficiency.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Logo upload functionality to AWS S3</li>
        <li>User account deletion</li>
        <li>Comprehensive test coverage</li>
        <li>Environment schema fixes</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Enhanced code quality and project reliability by adding critical tests and fixing environment schema issues, ensuring robust deployment and seamless functionality across various modules.</p>
    `
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction Model and Web App",
    description: "An interactive web app using Streamlit that predicts breast cancer malignancy with ~96% accuracy using Logistic Regression.",
    image: breastCancerPredictionThumbnail,
    tech: ["Python", "Streamlit", "Machine Learning", "FPDF", "Pickle"],
    github: "https://github.com/ManasVerma007/B_Cancer_streamlit",
    demo: "https://cancer-prediction.duckdns.org",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>Created an interactive web app that predicts breast cancer malignancy with high accuracy using machine learning.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Real-time predictions</li>
        <li>Report generation using FPDF</li>
        <li>Model serialization with Pickle</li>
        <li>User-friendly interface with Streamlit</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Used Logistic Regression on the Wisconsin Breast Cancer Dataset to achieve approximately 96% prediction accuracy, with a focus on creating an accessible and useful medical tool.</p>
    `
  },
  {
    id: "decentralized-certificate",
    title: "Decentralized Certificate Gen/Validation",
    description: "A blockchain-based system using Solidity smart contracts to securely store and verify digital certificates.",
    image: "/placeholder-project.jpg",
    tech: ["Solidity", "Blockchain", "IPFS", "Pinata", "Firebase", "Streamlit"],
    github: "https://github.com/ManasVerma007/Decntralized_Certificate_Generation_Validation",
    demo: "",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>Developed a secure blockchain-based system for generating and validating digital certificates.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Secure certificate generation</li>
        <li>Blockchain-based verification</li>
        <li>Decentralized storage with IPFS</li>
        <li>User authentication with Firebase</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Integrated IPFS via Pinata for decentralized storage of certificates and implemented Firebase Authentication, providing a streamlined user interface with Streamlit.</p>
    `
  },
  {
    id: "tabstacker",
    title: "Tabstacker (Chrome Extension)",
    description: "A Chrome extension for tab management with backend server, user authentication, and tab usage tracking features.",
    image: tabstackerThumbnail,
    tech: ["JavaScript", "Chrome Extension API", "JWT", "Node.js", "Express"],
    github: "https://github.com/ManasVerma007/tabstackerExtension/tree/master",
    demo: "https://lnkd.in/gjmBuzXK",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>A Chrome extension that helps users manage tabs and track their browsing habits to enhance productivity.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Tab timer and usage tracking</li>
        <li>User authentication with JWT</li>
        <li>User registration and login</li>
        <li>API integration for data persistence</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Developed and maintained the backend server for TabStacker, creating APIs and implementing user authentication while building frontend features to enhance productivity through tab management.</p>
    `
  }
];