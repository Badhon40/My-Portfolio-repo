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
      "Its a group project. A book store where user can search, give review and buy books. User can also add books to the cart and checkout. Admin can add, delete and update books.",
    tags: ["React","Redux","Shadcn","TailwindCss","React Router","react-icons","Mongodb","Express","nodejs"],
    image: bookshop,
    liveLink: " https://book-shop-frontend-vert.vercel.app/",
    githubLink: "https://github.com/bdshakhawat/book-shop-frontend",
    serverLink :"https://github.com/bdshakhawat/book-shop-backend"
  },
  {
    id: 2,
    title: "Tutor Link",
    description:
      "A group project. A platform for connecting tutors and students with user authentication, course management, and payment integration. User can also add courses to the cart and checkout.",
      tags: ["React","NextJs","Redux","Shadcn","TailwindCss","React Router","react-icons","Mongodb","Express","nodejs"],
    image: tutorlink,
    liveLink: "https://tutor-link-two.vercel.app/",
    githubLink: "https://github.com/Mdsoyaib123/tutor-link-frontend",
    serverLink: "https://github.com/Mdsoyaib123/tutor-link-backend"
  },
  {
    id: 3,
    title: "Art & Craft",
    description:
      "A platform for buying and selling handmade crafts with user authentication and product management. Have Toggle button for dark and light mode.",
    tags: ["React", "Mongodb", "Firebase", "Express", "React Router", "Tailwind", "DaisyUI"],
    image: artandcraft,
    liveLink: "https://art-and-craft-705cb.web.app",
    githubLink: "https://github.com/Badhon40/paper-carft-client-site.git",
    serverLink :"https://github.com/Badhon40/paper-craft-server-site.git"
  },
  {
    id: 4,
    title: "Book Vibe",
    description:
      "A book store where user can search, give review and buy books. ",
    tags: ["TailwindCss","DaisyUI","React","React Router","react-icons"],
    image: bookvibe,
    liveLink: "https://bookvite.surge.sh/",
    githubLink: "https://github.com/Badhon40/Assignment-8-BookReview.git",
  },
  {
    id: 5,
    title: "Real State Web",
    description:
      "A real estate web application with user authentication, and property management.",
    tags: ["React","Firebase", "TailwindCSS", "Swiper","React Router","React Icons"],
    image: realstate,
    liveLink: "https://real-state-web-6fb12.web.app",
    githubLink: "https://github.com/Badhon40/Real-State-repo.git",
  },
  {
    id: 6,
    title: "Retro ",
    description:
      "Simple retro web application where user can book Books with JavaScript functionality.",
    tags: ["JavaScript", "TailwindCss", "DaisyUi", "Html"],
  
    image: retro,
    liveLink: "https://real-state-web-6fb12.web.app",
    githubLink: "https://github.com/Badhon40/Real-State-repo.git",
  },
];

