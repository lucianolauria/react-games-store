import React, { useState } from "react";
import { RiShoppingCartLine, RiHeartAddLine, RiMenu2Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-[#100e17] z-40">
        <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden text-2xl">
        <RiMenu2Line />
      </button>

      <div className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${showMenu ? "top-0" : "-top-full"}`}>
        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4">
          <RiCloseLine />
        </button>
        <ul className="mt-20">
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Streams
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-4xl text-[#6e8ca1] block p-4 text-center"
            >
              Game store
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              News
            </a>
          </li>
        </ul>
        </div>



       <ul className="hidden lg:flex items-center gap-6">
            <li>
                <a href="" className="hover:text-[#6e8ca1] transition-colors">Inicio</a>
            </li>
            <li>
                <a href="" className="hover:text-[#6e8ca1] transition-colors">Streams</a>
            </li> 
            <li>
                <a href="" className="text-[#6e8ca1] transition-colors">Store</a>
            </li> 
            <li>
                <a href="" className="hover:text-[#6e8ca1] transition-colors">Comunidad</a>
            </li>      
        </ul>

        <ul className="flex items-center gap-6 text-xl">
            <li>
                <button className="hover:text-[#6e8ca1] transition-colors"><RiShoppingCartLine/></button>
            </li>
            <li>
                <button className="hover:text-[#6e8ca1] transition-colors"><RiHeartAddLine/></button>
            </li>
            <li>
                <button><img src="https://img.freepik.com/vector-gratis/lindo-astronauta-montando-cohete-agitando-mano-icono-dibujos-animados-ilustracion-concepto-icono-tecnologia-ciencia_138676-2130.jpg" className="w-8 h-8 object-cover rounded-full ring-2 ring-[#6e8ca1]" /></button>
            </li>
        </ul>
    </header>
  )
}

export default Header