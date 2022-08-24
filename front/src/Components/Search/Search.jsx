import React from "react";

import {RiSearch2Line} from "react-icons/ri"


export default function Search() {
    
  return (
  <div>
      <form>
      <input
        className="input" 
        type="text"
        placeholder="Busca un Libro..."
        // value=
        // onChange=
      />
      <button title="Search" type="submit"><RiSearch2Line size="1.5rem" /></button>
      </form>
   
    {/* Esto es provisorio para que ocupe el lugar en el navBar */}
  </div>
 );
}
