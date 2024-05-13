import { FunctionComponent } from "preact";
import {FilmType} from "../types.ts"

export const Film: FunctionComponent<{props: FilmType}> = ({props}) => {
    //const {name, age, sex, description, hobbies, photo, comments, password} = props.lover;
    return (
        <>
            <p>{props.name}</p>
            <p>{props.brand}</p>
            <p>{props.iso}</p>
            <p>{props.color}</p>
            <p>{props.customDescription}</p>
            <p>hay q poner mas pero de momento estos</p>
        </>
        
    )
}

