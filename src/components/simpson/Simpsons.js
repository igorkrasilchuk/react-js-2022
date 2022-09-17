import {simpsons} from "./data";
import Simpson from "./Simpson";

export  default function Simpsons() {

    return(
        <div>
            {
                simpsons.map((simpson,index) => <Simpson key={index} simpson={simpson}/> )
            }
        </div>
    );
}