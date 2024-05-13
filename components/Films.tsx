import { FunctionComponent } from "preact";
import {FilmType} from "../types.ts"
import AddFilms from "../islands/AddFilms.tsx"

export const Films: FunctionComponent<{props: FilmType[]}> = ({props}) => {
    //const {name, age, sex, description, hobbies, photo, comments, password} = props.lover;
    return (
        <div class="films">

           {props.map((elem) => {
                return (
                    <div class="film">
                        <h1>{elem.name}</h1>
                        <p>{elem.description}</p>
                        <img class="foto" src={elem.staticImageUrl}></img>
                        <p>{elem.formatOneTwenty}</p>
                        <p>{elem.formatThirtyFive}</p>
                        <AddFilms film={elem}></AddFilms>
                    </div>
                    
                )
           })} 
        </div>
        
    )
}