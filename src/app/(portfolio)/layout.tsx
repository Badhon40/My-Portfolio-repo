import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";


const Commonlayout = ({children}:{children : React.ReactNode}) => {
    return (
        <>
         <Navbar/>
         <main>
            {
                children
            }
         </main>

         <Footer/>
         
        </>
    );
};

export default Commonlayout;