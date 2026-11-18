import reusemartImg from '../assets/reusemart.png';
import reusemartLandingPage from '../assets/ReuseMart-LandingPage.png';
import reusemartLoginPage from '../assets/ReuseMart-LoginPage.png';
import reusemartProductPage from '../assets/ReuseMart-ProductPage.png';
import reusemartAdminPage from '../assets/ReuseMart-AdminPage.png';
import reusemartOwnerPage from '../assets/ReuseMart-OwnerPage.png';
import portfolioImg from '../assets/portofolio.png';
import monetaImg from '../assets/moneta-finance.png';

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "ReuseMart",
    category: "Web Development",
    description:
      "An e-commerce platform for buying and selling second-hand goods in Yogyakarta. Built as the final project for the Software Project Development course.\n\nThe system lets users list and buy pre-owned items in verified condition, with administrative dashboards to track listings, manage transactions, and oversee platform operations.",
    thumbnail_url: reusemartImg,
    live_demo_url: "https://reusemartuajy.my.id",
    repo_url: "",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "React"],
    created_at: "2023-09-15",
    pages: [
      {
        image: reusemartLandingPage,
        caption: "Main page displaying verified product listings."
      },
      {
        image: reusemartLoginPage,
        caption: "Authentication page for buyers, sellers, and administrators."
      },
      {
        image: reusemartProductPage,
        caption: "Product details, condition grading, and purchase action."
      },
      {
        image: reusemartAdminPage,
        caption: "Admin dashboard managing user accounts, listings, and orders."
      },
      {
        image: reusemartOwnerPage,
        caption: "Owner dashboard tracking revenue, volume, and monthly metrics."
      }
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "Personal portfolio built with React and Bootstrap. Features responsive navigation, interactive project showcases, direct CV download, and client-side contact messaging.",
    thumbnail_url: portfolioImg,
    live_demo_url: "",
    repo_url: "https://github.com/gilangwahyun/portofolio",
    technologies: ["React", "Bootstrap", "JavaScript", "Vite"],
    created_at: "2023-11-10"
  },
  {
    id: 3,
    title: "Moneta Finance",
    category: "Web Development",
    description:
      "A personal finance tracking progressive web app (PWA). Records income and expense transactions with categorized forms, custom date filters, dark and light theme options, and offline data persistence.",
    thumbnail_url: monetaImg,
    live_demo_url: "https://moneta-finance-green.vercel.app/",
    repo_url: "",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
    created_at: "2024-02-18",
    pages: [
      {
        image: monetaImg,
        caption: "Main finance dashboard with balance cards, monthly overview, and wallet breakdown."
      }
    ]
  }
];
