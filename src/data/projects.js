import cineverseThumbnail from '../assets/images/cineverse.png';
import imageRecognitionThumbnail from '../assets/images/image-recognition-service.png';
import logoexecutiveThumbnail from '../assets/images/logoexecutive.png';
import breastCancerPredictionThumbnail from '../assets/images/cancer-prediction.png';
import tabstackerThumbnail from '../assets/images/tabstacker.png';



export const projects = [
  {
    id: "cineverse",
    title: "Cineverse",
    description: "A feature-rich movie discovery platform with a distributed backend architecture, ensuring seamless access to TMDB API across regions.",
    image: cineverseThumbnail,
    tech: ["React", "TMDB API", "AWS EC2", "Nginx", "Let's Encrypt"],
    github: "https://github.com/ManasVerma007/movie-app",
    demo: "https://movie-app-lake-six.vercel.app/",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>Cineverse is a responsive movie discovery platform built with React and a distributed backend to ensure global availability of TMDB API data, overcoming regional access restrictions.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Movie discovery with seamless search and filtering</li>
        <li>Personalized collections and watchlist</li>
        <li>Detailed movie information with ratings and reviews</li>
        <li>Fully responsive UI for an optimal experience on all devices</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The frontend is deployed on Vercel, while the backend is hosted on AWS EC2, with Nginx acting as a reverse proxy and Let's Encrypt ensuring secure HTTPS communication.</p>
    `
  },
  {
    id: "image-recognition",
    title: "Image Recognition Service",
    description: "A serverless AI-powered image classification service utilizing AWS Lambda, Rekognition, and DynamoDB for real-time object detection.",
    image: imageRecognitionThumbnail,
    tech: ["AWS Lambda", "S3", "Rekognition", "DynamoDB", "API Gateway"],
    github: "https://github.com/ManasVerma007/image-recognition-service",
    demo: "https://image-recognition-service.vercel.app/",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>A fully serverless AI-powered image recognition system that detects and identifies objects in uploaded images using AWS Rekognition.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Automated object detection in images</li>
        <li>Real-time processing using AWS Lambda</li>
        <li>Scalable data storage with DynamoDB</li>
        <li>Secure and efficient API gateway integration</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Utilizes AWS Rekognition for image analysis, while AWS Lambda processes requests in a serverless architecture. DynamoDB is used for scalable metadata storage, ensuring real-time and efficient object recognition.</p>
    `
  },
  {
    id: "logoexecutive",
    title: "Logoexecutive (Open Source)",
    description: "An open-source tool under Team Siksha that enables secure logo uploads, user account deletion, and optimized backend services.",
    image: logoexecutiveThumbnail,
    tech: ["S3", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/TeamShiksha/logoexecutive",
    demo: "https://www.openlogo.fyi",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>Logoexecutive is an open-source platform aimed at improving branding efficiency by enabling secure logo uploads and account management.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Secure logo storage using AWS S3</li>
        <li>User account deletion with secure validation</li>
        <li>Comprehensive backend test coverage</li>
        <li>Optimized MongoDB schema for better performance</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Implemented secure logo storage on AWS S3, optimized API performance with Express and MongoDB, and enforced strong backend validation for secure user operations.</p>
    `
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction Model and Web App",
    description: "An AI-powered medical prediction web app using Logistic Regression to determine breast cancer malignancy with high accuracy.",
    image: breastCancerPredictionThumbnail,
    tech: ["Python", "Streamlit", "Machine Learning", "FPDF", "Pickle"],
    github: "https://github.com/ManasVerma007/B_Cancer_streamlit",
    demo: "https://cancer-prediction.duckdns.org",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>A machine learning-based medical web app designed to predict breast cancer malignancy using Logistic Regression on the Wisconsin Breast Cancer Dataset.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Real-time predictions with Streamlit interface</li>
        <li>Report generation using FPDF</li>
        <li>Serialized ML model using Pickle</li>
        <li>User-friendly and accessible UI</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>The model was trained using Logistic Regression, achieving ~96% accuracy. Streamlit was used for the frontend, and Pickle was utilized for model serialization and deployment.</p>
    `
  },
  {
    id: "decentralized-certificate",
    title: "Decentralized Certificate Gen/Validation",
    description: "A blockchain-based platform leveraging Solidity smart contracts to securely generate and verify digital certificates.",
    image: "/placeholder-project.jpg",
    tech: ["Solidity", "Blockchain", "IPFS", "Pinata", "Firebase", "Streamlit"],
    github: "https://github.com/ManasVerma007/Decntralized_Certificate_Generation_Validation",
    demo: "",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>This project enables secure issuance and validation of digital certificates using blockchain technology.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Immutable and tamper-proof certificates</li>
        <li>Smart contract-based verification</li>
        <li>Decentralized storage with IPFS and Pinata</li>
        <li>Authentication via Firebase</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Implemented smart contracts using Solidity and stored certificate data on IPFS via Pinata, ensuring high security and decentralization.</p>
    `
  },
  {
    id: "tabstacker",
    title: "Tabstacker (Chrome Extension)",
    description: "A productivity-enhancing Chrome extension for managing browser tabs, with backend tracking and authentication features.",
    image: tabstackerThumbnail,
    tech: ["JavaScript", "Chrome Extension API", "JWT", "Node.js", "Express"],
    github: "https://github.com/ManasVerma007/tabstackerExtension/tree/master",
    demo: "https://lnkd.in/gjmBuzXK",
    featured: true,
    details: `
      <h2>Project Overview</h2>
      <p>Tabstacker is a Chrome extension that helps users manage their browsing sessions efficiently through tab tracking and authentication.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Tab timer and usage tracking</li>
        <li>User authentication with JWT</li>
        <li>API integration for session persistence</li>
        <li>Improved browsing productivity</li>
      </ul>
      
      <h3>Technical Details</h3>
      <p>Developed backend APIs using Node.js and Express, secured authentication with JWT, and utilized Chrome Extension API for tab session tracking.</p>
    `
  }
];
