import { AlertTriangle, Facebook, Flower2, HomeIcon, Instagram, Slack, Twitter } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return(
        <div>
        <header className="bg-zinc-900 border-b border-zinc-800 px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <img src="/album.jpg" width={70} height={70} alt="Capa do album wings"/>
          <div className="flex flex-col gap-1">
            <a href="#" className="font-normal hover:text-zinc-500">Nia</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-100">Descobrindo a riqueza do legado Africano</a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          
          <a href=""><Instagram/></a>

          <a href=""><Facebook/></a>

          <a href=""><Twitter/></a>
          
          

          
        </div>

        

      
      <nav className="flex mt-10 gap-4">
      <Link href="/" className="flex items-center gap-3 text-xs text-zinc-200 hover:text-zinc-500">
        
        Home</Link>
      <Link href="/Racismo" className="flex items-center gap-3 text-xs  text-zinc-200 hover:text-zinc-500">
        
        Racismo</Link>
      
      <Link href="/Cultura" className="flex items-center gap-3 text-xs text-zinc-200 hover:text-zinc-500">
        
        Cultura
      </Link>
      
      <Link href="/Denuncie" className="flex items-center gap-3 mr-5 text-xs text-zinc-200 hover:text-zinc-500">
        
        Denuncie
      </Link>
      
      

    </nav>
    </header>
    </div>
    )
}