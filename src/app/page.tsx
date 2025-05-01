import Banner from "@/components/banner/Banner";
import Grid from "@/components/grid/Grid";
import Navbar from "@/components/navbar/Navbar";






export default function MainHome() {
  return (
      <>

       <Navbar/>
        <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto dark:bg-[#000319] ">  
         <div className="max-w-7xl w-full mx-auto">
        <Banner />

        <Grid />
      </div>
   </main>
      </>
   
  );
}
