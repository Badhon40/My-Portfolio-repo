import realstate from "../../assets/realstate.png"
import artandcraft from "../../assets/artandcraft.png"
import bookvibe from "../../assets/bookVibe.png"
import bookshop from "../../assets/bookshop.png"
import tutorlink from "../../assets/tutorlink.png"

export const projects = [
  {
    id: 1,
    title: "Book Shop",
    description:
      "A group project. A book store where users can search, review, and purchase books. Admin can manage books through a dashboard.",
    tags: ["React", "Redux", "Shadcn", "TailwindCss", "React Router", "react-icons", "Mongodb", "Express", "nodejs"],
    image: bookshop,
    liveLink: "https://book-shop-frontend-weld-tau.vercel.app",
    githubLink: "https://github.com/Badhon40/My-book-shop-frontend-3.git",
    serverLink: "https://book-shop-backend-rho.vercel.app",
    deployment: "Vercel (frontend), Vercel (backend)",
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
    liveLink: "https://new-tutor-link-frontend.vercel.app",
    githubLink: "https://github.com/Badhon40/New-tutor-link-frontend.git",
    serverLink: "https://github.com/Badhon40/New-tutor-link-backend.git",
    deployment: "Vercel (frontend), Vercel (backend)",
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
  
];
