import AboutMe from "@/components/aboutme/AboutMe";
import Banner from "@/components/banner/Banner";
import RecentBlogs from "@/components/blods/Blogs";
import ContactSection from "@/components/contactme/ContactSection";
import Education from "@/components/education/Education";
import ProjectSection from "@/components/projects/ProjectSection";
import SkillCategory from "@/components/skillcategory/SkillCategory";







export default function MainHome() {
  return (
      <>
        <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto dark:bg-[#000319] ">  
         <div className="max-w-7xl w-full mx-auto">
        <Banner />
        <ProjectSection />
        <SkillCategory />
        <Education />
        <AboutMe  />
        <RecentBlogs />
        <ContactSection />
      </div>
      </main>
      </>
   
  );
}
