import { Card2 } from "../componentes/Card2";
import { Footer } from "../componentes/Footer";
import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";

export default function Racismo(){
    return(
        <div className="h-screen flex flex-col">
        <Header/>
      <div className="flex flex-1">
      <Navbar/>
        <main className="flex-1 p-6">
            <center><h2 className="font-semibold text-2xl mt-10">Voce sabe o que é racismo?</h2></center>
        <Card2/>
</main>
        
      </div>
      <Footer/>
    </div>
    )
}