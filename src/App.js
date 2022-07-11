import { useState } from "react";
import { ClientsTable } from "./components/ClientsTable";
import { FilmTable } from "./components/FilmTable";
import { LocacaoTable } from "./components/LocacaoTable";
import { NavBar } from "./components/Navbar";
import { RelatorioClientesEmAtrasoTable } from "./components/RelatorioClientesEmAtraso";

function App() {
  const [current, setCurrent] = useState('cliente');

  return (
    <>
      <NavBar Current={current} SetCurrent={setCurrent}/>
      <ClientsTable isOpen={current==='cliente'}/>
      <FilmTable isOpen={current==='filme'}></FilmTable>
      <LocacaoTable isOpen={current==='locacao'}></LocacaoTable>
      <RelatorioClientesEmAtrasoTable isOpen={current==='cliAtr'}></RelatorioClientesEmAtrasoTable>
    </>
  );
}

export default App;
