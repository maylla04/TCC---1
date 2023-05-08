import { Play } from 'lucide-react';

export function Meio(){
    return(
        <div className="grid grid-cols-3 gap-4 mt-4">
              <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="/album.jpg" width={104} height={104} alt="Capa do album wings"/>
                  <strong>Album Wings</strong>
                  <button className="w-10 h-12 flex items-center pl-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                    </button>             
              </a>


              <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://rapforte.com/wp-content/uploads/2021/04/C0FA635A-8A92-46F2-BED8-E6A79EDEE45E.jpeg" width={104} height={104} alt="Capa do album wings"/>
                  <strong>Album Teto</strong>
                  <button className="w-10 h-12 flex items-center pl-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                    </button>             
              </a>


              <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://i.scdn.co/image/ab67616d0000b273afdd3ee20cd7c4a636b07cce" width={104} height={104} alt="Capa do album wings"/>
                  <strong>Album Veigh</strong>
                  <button className="w-10 h-12 flex items-center pl-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                    </button>             
              </a>


              <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src='https://m.media-amazon.com/images/I/71n0xmxpw7L._AC_SL1400_.jpg' width={104} height={104} alt="Capa do album wings"/>
                  <strong>Album Eminem</strong>
                  <button className="w-10 h-12 flex items-center pl-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                    </button>             
              </a>


              <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://p16.resso.me/img/tos-alisg-v-2102/e352121b0724465c99ad22401a59212f~c5_500x500.jpg" width={104} height={104} alt="Capa do album wings"/>
                  <strong>Album Nunca sozinho</strong>
                  <button className="w-10 h-12 flex items-center pl-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                    </button>             
              </a>


              <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <img src="https://m.media-amazon.com/images/I/61IeCixjIZL._AC_SX425_.jpg" width={104} height={104} alt="Capa do album wings"/>
                  <strong>Album Rihanna</strong>
                  <button className="w-10 h-12 flex items-center pl-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play/>
                    </button>             
              </a>



            </div>
    )
}