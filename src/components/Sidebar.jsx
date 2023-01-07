import React, { useState } from "react";
import { MdAttachMoney } from "react-icons/md";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiFilter3Line, RiCloseLine } from "react-icons/ri";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="w-80 h-full text-gray-400">
      <div className="bg-[#4c515e]/50 rounded-2xl p-4 mb-4">
        <h4 className="mb-4 text-white text-lg">Categorias</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="accion" className="accent-[#6e8ca1]"/>
            <label htmlFor="accion">Accion</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="aventura" className="accent-[#6e8ca1]"/>
            <label htmlFor="aventura">Aventura</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terror" className="accent-[#6e8ca1]"/>
            <label htmlFor="terror">Terror</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="rol" className="accent-[#6e8ca1]"/>
            <label htmlFor="rol">Rol</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="estrategia" className="accent-[#6e8ca1]"/>
            <label htmlFor="estrategia">Estrategia</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="simulador" className="accent-[#6e8ca1]"/>
            <label htmlFor="simulador">Simulador</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Sports" className="accent-[#6e8ca1]"/>
            <label htmlFor="Sports">Sports</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="indie" className="accent-[#6e8ca1]"/>
            <label htmlFor="indie">Indie</label>
          </div>
        </div>
        <h4 className="my-4 text-white text-lg">Plataformas</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="PC" className="accent-[#6e8ca1]"/>
            <label htmlFor="PC">PC</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Play Station 5" className="accent-[#6e8ca1]"/>
            <label htmlFor="Play Station 5">Play Station 5</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Play Station 4" className="accent-[#6e8ca1]"/>
            <label htmlFor="Play Station 4">Play Station 4</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="XBOX Series" className="accent-[#6e8ca1]"/>
            <label htmlFor="XBOX Series">XBOX 360</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Nintendo" className="accent-[#6e8ca1]"/>
            <label htmlFor="Nintendo">Nintendo</label>
          </div>
        </div>
        <h4 className="my-4 text-white text-lg">Precio</h4>
        <form action="" className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-4">
            <div className="relative">
              <MdAttachMoney className="absolute left-2 top-1/2 -translate-y-1/2" />
              <input
                type="number"
                className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
              />
            </div>
            <span>-</span>
            <div className="relative">
              <MdAttachMoney className="absolute left-2 top-1/2 -translate-y-1/2" />
              <input
                type="number"
                className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
              />
            </div>
          </div>
          <button
              type="submit" className="bg-[#6e8ca1] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200">
              Aplicar filtros
          </button>
        </form>
      </div>

      <div>
        <ul className="flex items-center justify-center">
          <li className="p-3 hover:text-[#6e8ca1]">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-2xl"
            >
              <AiOutlineFacebook />
            </a>
          </li>
          <li className="p-3 hover:text-[#6e8ca1]">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-2xl"
            >
              <AiOutlineInstagram />
            </a>
          </li>
          <li className="p-3 hover:text-[#6e8ca1]">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              className="text-2xl"
            >
              <AiOutlineWhatsApp />
            </a>
          </li>
        </ul>
      </div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed bottom-4 right-4 bg-[#6e8ca1] p-4 rounded-full text-xl"
      >
        {showSidebar ? <RiCloseLine /> : <RiFilter3Line />}
      </button>
    </div>
  );
};
