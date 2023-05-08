
import { Footer } from '../componentes/Footer';
import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';

export default function Denuncie(){
    return(
        <div className="h-screen flex flex-col">
      <Header/>
      <div className="flex flex-1">

      <Navbar/>
        <main className="flex-1 p-6">
        <form className="ml-10" method="post" encType="multipart/form-data">
            <h1 className="font-semibold text-2xl mt-10 mb-5">Formulário de Denúncia:</h1>
            
            <input className="text-black mt-5 mb-10 w-80 border-b bg-black" type="text" placeholder="Digite seu nome completo" required/><br/>

            
            <input className="text-black mt-5 mb-10 w-80 border-b bg-black" type="text" placeholder="Digite seu e-mail" required/><br/>

            <label>Selecione o docente para envio<br/> 
              (opcional):</label><br/>
            <select className="mt-3 mb-5 border-b bg-black w-80">
              <option>Marcela Ernesto</option>
              <option>Jales Lucio</option>
            </select><br/>

            <input className="mt-5 mb-10 w-80 h-20 border-b bg-black" 
            type="text" placeholder="Digite aqui sua denúncia..." required/><br/>

            <label>Anexar arquivos:</label><br/>

            <input type="file" className="mt-5"/><br/>
            
            <input type="submit" placeholder="Enviar" className="bg-zinc-900 w-80 h-14 mt-10"/>
            </form> 
           
           
</main>
        
      </div>
      <Footer/>
    </div>
    )
}