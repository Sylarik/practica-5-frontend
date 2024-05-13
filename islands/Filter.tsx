import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import { FilmType } from "../types.ts";
import {Films} from "../components/Films.tsx"

export const Filter: FunctionComponent<{f: FilmType[]}> = ({f}) => {

  //const {lovers} = props;

    const [name, setName] = useState<string>("");
    const [marca, setMarca] = useState<string>("")
    const [iso, setISO] = useState<number>()
    const [formato, setFormato] = useState<string>("")
    const [color, setColor] = useState<string>("")

    const [filteredList, setFilteredList] = useState<FilmType[]>(f);

    let listaFiltrada:FilmType[] = f;
    
    useEffect(() => {
      filtrar();
    })

    const filtrar = () => {
      if (name) {
        listaFiltrada = listaFiltrada.filter(film => film.name.includes(name));
      }
      if (marca) {
        listaFiltrada = listaFiltrada.filter(film => film.brand.includes(marca));
      }
      if (iso) {
        listaFiltrada = listaFiltrada.filter(film => film.iso===iso);
      }
      if (formato) {
        if (formato === "0"){
          listaFiltrada = listaFiltrada.filter(film => film.formatThirtyFive=== true);
        }else if (formato === "1"){
          listaFiltrada = listaFiltrada.filter(film => film.formatOneTwenty=== true);
        }else if (formato === "2"){
          listaFiltrada = listaFiltrada.filter(film => film.formatOneTwenty=== true && film.formatThirtyFive=== true);
        }

      }
      if (color) {
        if (color === "0"){
          listaFiltrada = listaFiltrada.filter(film => film.color=== false);
        }else if (color === "1"){
          listaFiltrada = listaFiltrada.filter(film => film.color=== true);
        }
      }


      setFilteredList(listaFiltrada)
    }   
    

  

  return (
    <div class="index">

      <div class="filtrar">
        <h2> Filtrar </h2>
        <p> (en rosa fabada como a ti te gusta (a mi tmb))</p>
        <input type="text" name="nombre" placeholder="name" onBlur={(e) => setName(e.currentTarget.value)}></input>

        <p> marca: </p>
        <select id="brand" name="marca" onChange={(e) => (setMarca(e.currentTarget.value))}required>
          <option value=""> --- </option>
          {f
            // Filtrar marcas únicas
            .filter((marca, index, self) => self.findIndex(m => m.brand === marca.brand) === index)
            // Mapear y renderizar las opciones
            .map((marca, index) => (
              <>
                
                <option key={index} value={marca.brand}>
                    {marca.brand}
                </option>
              </>
              
            ))
          }
        </select>

        <p> iso: </p>
        <select id="iso" name="iso" onChange={(e) => (setISO(parseInt(e.currentTarget.value)))}required>
            <option value=""> --- </option>
            {[... new Set(f.map(iso => iso.iso))].map((elem) => (
              <option value={elem}> {elem}</option>
            ))}
        </select>

        <p>formato:</p>
        <select id="format" name="formato" onChange={(e) => (setFormato(e.currentTarget.value))}required>
            <option value=""> --- </option>
            <option value="0"> formatThirtyFive </option>
            <option value="1"> formatOneTwenty </option>
            <option value="2"> Both </option>
        </select>

        <p> color: </p>
        <select id="color" name="color" onChange={(e) => (setColor(e.currentTarget.value))}required>
            <option value=""> --- </option>
            <option value="0"> b&w </option>
            <option value="1"> color </option>
        </select>
         
      </div>
        
      <div class="solteros-container">
        <Films props={filteredList} />
      </div>

    </div>
  );
};

export default Filter;