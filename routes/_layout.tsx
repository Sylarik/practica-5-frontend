import { PageProps } from "$fresh/server.ts";



//poner COmponent siempre
export default function Layout ({Component}: PageProps) {
    return (
        <>
            <p style={ {fontSize: '100px', textAlign: 'center', lineHeight: '1.5', paddingTop: '20px' }}> !!!!!! PELICULAS !!!!!! </p>
           
           <Component></Component>
        </>
    )
}