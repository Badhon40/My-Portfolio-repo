import realstate from "../../assets/realstate.png"
import artandcraft from "../../assets/artandcraft.png"
import bookvibe from "../../assets/bookVibe.png"
import retro from "../../assets/retro.png"
import bookshop from "../../assets/bookShop.png"
import tutorlink from "../../assets/tutorlink.png"

export const projects = [
  {
    id: 1,
    title: "Book Shop",
    description:
      "A group project. A book store where users can search, review, and purchase books. Admin can manage books through a dashboard.",
    tags: ["React", "Redux", "Shadcn", "TailwindCss", "React Router", "react-icons", "Mongodb", "Express", "nodejs"],
    image: bookshop,
    liveLink: "https://book-shop-frontend-vert.vercel.app/",
    githubLink: "https://github.com/bdshakhawat/book-shop-frontend",
    serverLink: "https://github.com/bdshakhawat/book-shop-backend",
    deployment: "Vercel (frontend), Render (backend)",
    features: [
      "User authentication & protected routes",
      "Search and filter books",
      "Add to cart & checkout system",
      "Admin dashboard with full book CRUD",
      "Responsive UI using TailwindCSS and Shadcn"
    ],
    workingProcedure:
      "Users can explore books, add them to cart, and complete the checkout process. Admins manage the book inventory through a protected dashboard."
  },
  {
    id: 2,
    title: "Tutor Link",
    description:
      "A group project for connecting tutors and students with features like authentication, dashboard, and secure payments.",
    tags: ["React", "NextJs", "Redux", "Shadcn", "TailwindCss", "React Router", "react-icons", "Mongodb", "Express", "nodejs"],
    image: tutorlink,
    liveLink: "https://tutor-link-two.vercel.app/",
    githubLink: "https://github.com/Mdsoyaib123/tutor-link-frontend",
    serverLink: "https://github.com/Mdsoyaib123/tutor-link-backend",
    deployment: "Vercel (frontend), Render (backend)",
    features: [
      "Student and tutor dashboards",
      "Add and manage tutoring courses",
      "Secure Stripe payment integration",
      "Booking and availability calendar",
      "Role-based access (admin, tutor, student)"
    ],
    workingProcedure:
      "Students can browse tutors and book sessions. Tutors can manage their availability and courses. Admins can monitor platform activity."
  },
  {
    id: 3,
    title: "Art & Craft",
    description:
      "An online platform for buying and selling handmade crafts. Includes authentication and dark/light mode toggle.",
    tags: ["React", "Mongodb", "Firebase", "Express", "React Router", "Tailwind", "DaisyUI"],
    image: artandcraft,
    liveLink: "https://art-and-craft-705cb.web.app",
    githubLink: "https://github.com/Badhon40/paper-carft-client-site.git",
    serverLink: "https://github.com/Badhon40/paper-craft-server-site.git",
    deployment: "Firebase Hosting (full stack)",
    features: [
      "User authentication using Firebase",
      "Craft listing and product pages",
      "Add to cart and checkout system",
      "Theme toggle (dark/light)",
      "CRUD features for sellers"
    ],
    workingProcedure:
      "Users can browse crafts, log in, and place orders. Sellers can add and manage their crafts. Admins can view users and listings."
  },
  {
    id: 4,
    title: "Book Vibe",
    description:
      "A simple book reviewing platform where users can browse and review books.",
    tags: ["TailwindCss", "DaisyUI", "React", "React Router", "react-icons"],
    image: bookvibe,
    liveLink: "https://bookvite.surge.sh/",
    githubLink: "https://github.com/Badhon40/Assignment-8-BookReview.git",
    deployment: "Surge Hosting",
    features: [
      "Book browsing and detailed view",
      "Add reviews and ratings",
      "Clean UI with Tailwind and DaisyUI",
      "React Router navigation",
      "Responsive for mobile and desktop"
    ],
    workingProcedure:
      "Users can navigate through the site to explore books, read details, and leave reviews. No login is required for reading."
  },
  {
    id: 5,
    title: "Real State Web",
    description:
      "A real estate website with listings and property management functionality.",
    tags: ["React", "Firebase", "TailwindCSS", "Swiper", "React Router", "React Icons"],
    image: realstate,
    liveLink: "https://real-state-web-6fb12.web.app",
    githubLink: "https://github.com/Badhon40/Real-State-repo.git",
    deployment: "Firebase Hosting",
    features: [
      "Real estate property listing",
      "Image slider with Swiper.js",
      "Authentication with Firebase",
      "Responsive layout",
      "Property detail pages"
    ],
    workingProcedure:
      "Users can browse property listings with images and details. Admins or agents can list properties after authentication."
  },
  {
    id: 6,
    title: "Retro",
    description:
      "A retro-style website where users can book books with basic JavaScript functionality.",
    tags: ["JavaScript", "TailwindCss", "DaisyUi", "Html"],
    image: retro,
    liveLink: "https://real-state-web-6fb12.web.app", // Replace with actual link if wrong
    githubLink: "https://github.com/Badhon40/Real-State-repo.git", // Replace if incorrect
    deployment: "Firebase Hosting",
    features: [
      "Pure HTML/CSS/JavaScript",
      "Basic cart booking feature",
      "Retro UI design",
      "Form validation",
      "Responsive layout"
    ],
    workingProcedure:
      "Users can interact with the UI to select and book books. JavaScript handles the form validation and cart logic without frameworks."
  }
];
