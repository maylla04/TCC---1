
import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';
import { Footer } from '../componentes/Footer';
import { Card3 } from '../componentes/Card3';

export default function Cultura(){
    return(
        <div className="h-screen flex flex-col">
      <Header/>
      <div className="flex flex-1">

      <Navbar/>
        <main className="flex-1 p-6">

            <center><h2 className="font-semibold text-2xl mt-10 mb-10">
              Cultura Africana</h2></center>
          <Card3/>
           
</main>
        
      </div>
      <Footer/>
    </div>
    )
}