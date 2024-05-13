import { useSignal } from "@preact/signals";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import {Films} from "../components/Films.tsx"
import {Film} from "../components/Film.tsx"
import {FilmType} from "../types.ts"
import {Filter} from "../islands/Filter.tsx"

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, FilmType[]>) => {
    /* CON FETCH
    const url = await fetch(`https://supermondongo.deno.dev/`)
    const json = await url.json()
    return ctx.render(json)
    */

    //CON AXIOS

    const url = await axios.get(`https://filmapi.vercel.app/api/films`)
    if(!url){
      return new Response("Error fetching heroes", {status:500})
    }
    return ctx.render(url.data);

  }
}

export default function Home( props: PageProps<FilmType[]>) {
  return (
    <body>
      <div>
        <h1> ¿CANSADO DE NO ENCONTRAR LA PELICULA PERFECTA PARA TUS SESIONES DE FOTOGRAFÍA?</h1>
        <h1> SÍ, HAS LEIDO BIEN</h1>
        <h1> ESTA ES UNA PÁGINA DE PELÍCULAS DE CÁMARAS RETRO DE ESAS QUE LE GUSTAN A LA GENTE CON GUSTO ;) </h1>
        <h1>(VA POR TI PROFE ;3)</h1>
        <h1> SI HAS VENIDO POR PELICULAS DE CINE TEMO DECIRTE QUE NO ESTAS EN EL SITIO ADECUADO Y QUE PELICULA ES UNA PALABRA POLISEMICA </h1>
        <h2> Este el mejor sitio que encontraras para buscar cual es la pelicula que llevas tanto tiempo añorando por no saber buscar bien</h2>
        <p> Podras FILTRAR sobre todas las caracteristicas de la pelicula que quieras</p>
        <p> No encontraras ninguna pagina que FILTRE tan bien como esta </p>

        <Filter f = {props.data}/>

      </div>
    </body>
    
  )
}
