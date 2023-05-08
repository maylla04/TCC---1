import { AlertTriangle,  Flower2, HomeIcon,  Slack } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return(
        <aside className="w-50 bg-zinc-950 p-6">
          

        <nav className="space-y-6 mt-10">
            <Link href="/" className="flex items-center gap-3 text-xs text-zinc-200 hover:text-zinc-500">
              <HomeIcon/>
              Home</Link>
            <Link href="/Racismo" className="flex items-center gap-3 text-xs  text-zinc-200 hover:text-zinc-500">
              <Slack/>
              Racismo</Link>
            
            <Link href="/Cultura" className="flex items-center gap-3 text-xs text-zinc-200 hover:text-zinc-500">
              <Flower2/>
              Cultura
            </Link>
            
            <Link href="/Denuncie" className="flex items-center gap-3 text-xs text-zinc-200 hover:text-zinc-500">
              <AlertTriangle/>
              Denuncie
            </Link>
            
            

          </nav>
          
          </aside>
    )
}